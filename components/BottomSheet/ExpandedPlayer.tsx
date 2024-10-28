import { View as ThemedView, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
const { width } = Dimensions.get('window');
import {
    useSafeAreaInsets,
} from 'react-native-safe-area-context';



export function ExpandedPlayer({ song }: { song: any }) {
    const insets = useSafeAreaInsets();
    return (
        <LinearGradient
            colors={['#948bc9', '#6d659c']}
            style={[styles.rootContainer, { paddingTop: insets.top }]}
        >
            <ThemedView style={styles.dragHandle} />

            <ThemedView style={styles.container}>
                <ThemedView style={styles.artworkContainer}>
                    <Image
                        source={{ uri: 'https://cdn.theatlantic.com/thumbor/FNDCOksdZgDXO7bzQ3MCXzj3W30=/732x0:2419x1687/1080x1080/media/img/mt/2021/05/SOUR_FINAL/original.jpg' }}
                        style={styles.artwork}
                    />
                </ThemedView>

                <ThemedView style={styles.controls}>
                    <ThemedView style={styles.titleContainer}>
                        <ThemedView style={styles.titleRow}>
                            <ThemedView style={styles.titleMain}>
                                <ThemedText type="title" style={styles.title}>{song.title}</ThemedText>
                                <ThemedText style={styles.artist}>{song.artist}</ThemedText>
                            </ThemedView>
                            <ThemedView style={styles.titleIcons}>
                                <Pressable>
                                    <Ionicons name="star-outline" size={24} color="#fff" />
                                </Pressable>
                                <Pressable>
                                    <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
                                </Pressable>
                            </ThemedView>
                        </ThemedView>
                    </ThemedView>

                    <ThemedView style={styles.progressBar}>
                        <ThemedView style={styles.progress} />
                    </ThemedView>

                    <ThemedView style={styles.timeContainer}>
                        <ThemedText style={styles.timeText}>0:09</ThemedText>
                        <ThemedText style={styles.timeText}>-2:38</ThemedText>
                    </ThemedView>

                    <ThemedView style={styles.buttonContainer}>
                        <Pressable style={styles.button}>
                            <Ionicons name="play-skip-back" size={35} color="#fff" />
                        </Pressable>
                        <Pressable style={[styles.button, styles.playButton]}>
                            <Ionicons name="pause" size={45} color="#fff" />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Ionicons name="play-skip-forward" size={35} color="#fff" />
                        </Pressable>
                    </ThemedView>

                    <ThemedView style={styles.volumeControl}>
                        <Ionicons name="volume-low" size={24} color="#fff" />
                        <ThemedView style={styles.volumeBar}>
                            <ThemedView style={styles.volumeProgress} />
                        </ThemedView>
                        <Ionicons name="volume-high" size={24} color="#fff" />
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    dragHandle: {
        width: 40,
        height: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 2,
        alignSelf: 'center',
        marginTop: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 30,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
    },
    artworkContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 12,
        backgroundColor: 'transparent', // Required for Android shadows
        marginBottom: 40,
    },
    artwork: {
        width: width - 80,
        height: width - 80,
        borderRadius: 8,
    },
    controls: {
        width: '100%',
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'space-between',
    },
    titleContainer: {
        marginBottom: 20,
        backgroundColor: 'transparent',
        width: '100%',
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    titleMain: {
        flex: 1,
    },
    titleIcons: {
        flexDirection: 'row',
        gap: 15,
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
        gap: 50,
        backgroundColor: 'transparent',
    },
    button: {
        padding: 10,
    },
    playButton: {
        transform: [{ scale: 1.2 }],
    },
    volumeControl: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    volumeBar: {
        flex: 1,
        height: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 1.5,
    },
    volumeProgress: {
        width: '70%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 1.5,
    },
});
