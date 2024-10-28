import { StyleSheet, Pressable, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export function MiniPlayer({ onPress, song }: { onPress: () => void; song: any }) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <ThemedView style={styles.content}>
                <Image
                    source={{ uri: 'https://cdn.theatlantic.com/thumbor/FNDCOksdZgDXO7bzQ3MCXzj3W30=/732x0:2419x1687/1080x1080/media/img/mt/2021/05/SOUR_FINAL/original.jpg' }}
                    style={styles.artwork}
                />
                <ThemedView style={styles.textContainer}>
                    <ThemedText type="defaultSemiBold">{song.title}</ThemedText>
                    <ThemedText style={styles.artistText}>{song.artist}</ThemedText>
                </ThemedView>
                <Pressable style={styles.playButton}>
                    <ThemedText>▶️</ThemedText>
                </Pressable>
            </ThemedView>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 65, // Fixed height
        backgroundColor: 'rgba(255,255,255,0.98)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#ccc',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    artwork: {
        width: 40,
        height: 40,
        borderRadius: 6,
    },
    textContainer: {
        flex: 1,
        marginLeft: 12,
    },
    artistText: {
        fontSize: 14,
        opacity: 0.7,
    },
    playButton: {
        padding: 8,
    },
});
