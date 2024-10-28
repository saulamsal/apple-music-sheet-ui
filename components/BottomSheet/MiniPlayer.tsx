import { StyleSheet, Pressable, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export function MiniPlayer({ onPress, song }: { onPress: () => void; song: any }) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <ThemedView style={styles.content}>
                <Image
                    source={{ uri: song.artwork }}
                    style={styles.artwork}
                />
                <ThemedView style={styles.textContainer}>
                    <ThemedText type="defaultSemiBold">{song.title}</ThemedText>
                </ThemedView>
                <ThemedView style={styles.controls}>
                    <Pressable style={styles.controlButton}>
                        <Ionicons name="pause" size={24} />
                    </Pressable>
                    <Pressable style={styles.controlButton}>
                        <Ionicons name="play-forward" size={24} />
                    </Pressable>
                </ThemedView>
            </ThemedView>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10, // Leave space for tab bar
        left: 0,
        right: 0,
        height: 65,

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.98)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
        marginHorizontal: 10,
        borderRadius: 12,
    },
    artwork: {
        width: 48,
        height: 48,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 12,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginRight: 4,
    },
    controlButton: {
        padding: 8,
    },
});
