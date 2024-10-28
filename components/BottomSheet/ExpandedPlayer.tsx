import { StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

export function ExpandedPlayer({ song }: { song: any }) {
    return (

        <LinearGradient
            colors={['#948bc9', '#6d659c']}
            style={styles.rootContainer}
        >
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
                            <Ionicons name="play-skip-back" size={24} color="#fff" />
                        </Pressable>
                        <Pressable style={[styles.button, styles.playButton]}>
                            <Ionicons name="pause" size={32} color="#fff" />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Ionicons name="play-skip-forward" size={24} color="#fff" />
                        </Pressable>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#2D4356',
        height: '100%',
        width: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 60,
        backgroundColor: 'transparent',
    },
    artwork: {
        width: width - 80,
        height: width - 80,
        borderRadius: 8,
        marginBottom: 40,

    },
    controls: {
        width: '100%',
        backgroundColor: 'transparent',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
        color: '#fff',
    },
    artist: {
        fontSize: 16,
        opacity: 0.7,
        color: '#fff',
    },
    progressBar: {
        height: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 1.5,
        marginBottom: 10,
    },
    progress: {
        width: '30%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 1.5,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: 'transparent',
    },
    timeText: {
        fontSize: 12,
        opacity: 0.6,
        color: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        backgroundColor: 'transparent',
    },
    button: {
        padding: 10,
    },
    playButton: {
        transform: [{ scale: 1.5 }],
    },
});
