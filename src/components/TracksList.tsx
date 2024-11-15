import { utilsStyles } from '@/styles';
import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import TrackPlayer, { Track } from 'react-native-track-player';
import { TrackListItem } from './TrackListItem';

export type TracksListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[];
};

const ItemDivider = () => <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />;

export const TracksList = ({ tracks, ...flatListProps }: TracksListProps) => {
	const handleTrackSelect = async (track: Track) => {
		await TrackPlayer.load(track);
		await TrackPlayer.play();
	};

	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			renderItem={({ item }) => <TrackListItem track={item} onTrackSelect={handleTrackSelect} />}
			{...flatListProps}
		/>
	);
};
