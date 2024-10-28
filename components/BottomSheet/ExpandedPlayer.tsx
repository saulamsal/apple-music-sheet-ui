import { StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const { width } = Dimensions.get('window');

export function ExpandedPlayer({ song }: { song: any }) {
    return (
        <ThemedView style={styles.container}>
            <Image
                source={{ uri: 'https://cdn.theatlantic.com/thumbor/FNDCOksdZgDXO7bzQ3MCXzj3W30=/732x0:2419x1687/1080x1080/media/img/mt/2021/05/SOUR_FINAL/original.jpg' }}
                style={styles.artwork}
            />

            <ThemedView style={styles.controls}>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title" style={styles.title}>{song.title}</ThemedText>
                    <ThemedText style={styles.artist}>{song.artist}</ThemedText>
                </ThemedView>

                <ThemedView style={styles.progressBar}>
                    <ThemedView style={styles.progress} />
                </ThemedView>

                <ThemedView style={styles.timeContainer}>
                    <ThemedText style={styles.timeText}>0:00</ThemedText>
                    <ThemedText style={styles.timeText}>3:36</ThemedText>
                </ThemedView>

                <ThemedView style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <ThemedText style={styles.icon}>⏮️</ThemedText>
                    </Pressable>
                    <Pressable style={[styles.button, styles.playButton]}>
                        <ThemedText style={styles.icon}>⏸️</ThemedText>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <ThemedText style={styles.icon}>⏭️</ThemedText>
                    </Pressable>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 60,
    },
    artwork: {
        width: width - 80,
        height: width - 80,
        borderRadius: 8,
        marginBottom: 40,
    },
    controls: {
        width: '100%',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
    },
    artist: {
        fontSize: 16,
        opacity: 0.7,
    },
    progressBar: {
        height: 3,
        backgroundColor: '#ddd',
        borderRadius: 1.5,
        marginBottom: 10,
    },
    progress: {
        width: '30%',
        height: '100%',
        backgroundColor: '#000',
        borderRadius: 1.5,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    timeText: {
        fontSize: 12,
        opacity: 0.6,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
    },
    button: {
        padding: 10,
    },
    playButton: {
        transform: [{ scale: 1.5 }],
    },
    icon: {
        fontSize: 24,
    },
});
