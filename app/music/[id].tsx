import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MusicScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const song = {
        id: '1',
        title: 'vampire',
        artist: 'Olivia Rodrigo',
        year: 2023,
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">{song.title}</ThemedText>
            <ThemedText type="subtitle">{song.artist}</ThemedText>
            <ThemedText>Year: {song.year}</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
