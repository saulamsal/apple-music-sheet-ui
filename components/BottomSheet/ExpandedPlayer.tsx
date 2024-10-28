import { View as ThemedView, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
const { width } = Dimensions.get('window');
import {
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

function darkenColor(color: string) {
    if (color === '#000000' || color === null) {
        return '#000000';
    }

    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length < 3) {
        return '#000000';
    }

    const r = Math.floor(parseInt(rgb[0]) * 0.5);
    const g = Math.floor(parseInt(rgb[1]) * 0.5);
    const b = Math.floor(parseInt(rgb[2]) * 0.5);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}




export function ExpandedPlayer({ song }: { song: any }) {

    const insets = useSafeAreaInsets();

    const colorToUse = song.artwork_bg_color || "#000000";
    const colors = [colorToUse, darkenColor(colorToUse)];
    return (
        <LinearGradient
            colors={colors}
            style={[styles.rootContainer, { paddingTop: insets.top }]}
        >
            <ThemedView style={styles.dragHandle} />

            <ThemedView style={styles.container}>
                <ThemedView style={styles.artworkContainer}>
                    <Image
                        source={{ uri: song.artwork }}
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
                                <Pressable style={styles.iconButton}>
                                    <Ionicons name="star-outline" size={18} color="#fff" />
                                </Pressable>
                                <Pressable style={styles.iconButton}>
                                    <Ionicons name="ellipsis-horizontal" size={18} color="#fff" />
                                </Pressable>
                            </ThemedView>
                        </ThemedView>
                    </ThemedView>


                    <ThemedView>
                        <ThemedView style={styles.progressBar}>
                            <ThemedView style={styles.progress} />
                        </ThemedView>

                        <ThemedView style={styles.timeContainer}>
                            <ThemedText style={styles.timeText}>0:09</ThemedText>
                            <ThemedText style={styles.timeText}>-2:38</ThemedText>
                        </ThemedView>
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
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
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
        height: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 5,
        marginBottom: 10,
    },
    progress: {
        width: '30%',
        height: '100%',
        backgroundColor: '#ffffff6a',
        borderRadius: 5,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
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
    iconButton: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
