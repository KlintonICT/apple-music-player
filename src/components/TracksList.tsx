import { utilsStyles } from '@/styles';
import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import { TrackListItem } from './TrackListItem';

export type TracksListProps = Partial<FlatListProps<unknown>> & {
	tracks: any[];
};

const ItemDivider = () => <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />;

export const TracksList = ({ tracks, ...flatListProps }: TracksListProps) => {
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			renderItem={({ item }) => (
				<TrackListItem
					track={{
						...item,
						image: item.artwork,
					}}
				/>
			)}
			{...flatListProps}
		/>
	);
};
