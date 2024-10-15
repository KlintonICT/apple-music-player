import library from '@/assets/data/library.json';
import { utilsStyles } from '@/styles';
import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import { TrackListItem } from './TrackListItem';

export type TracksListProps = Partial<FlatListProps<unknown>>;

const ItemDivider = () => <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />;

export const TracksList = ({ ...flatListProps }: TracksListProps) => {
	return (
		<FlatList
			data={library}
			ItemSeparatorComponent={ItemDivider}
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
