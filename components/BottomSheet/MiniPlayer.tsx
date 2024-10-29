import { StyleSheet, Pressable, Image, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { useColorScheme } from '@/hooks/useColorScheme';

export function MiniPlayer({ onPress, song, isPlaying, onPlayPause }: MiniPlayerProps) {
    const insets = useSafeAreaInsets();
    const colorScheme = useColorScheme();

    // Calculate bottom position considering tab bar height
    const bottomPosition = Platform.OS === 'ios' ? insets.bottom + 44 : 60;

    return (
        <Pressable onPress={onPress} style={[
            styles.container,
            { bottom: bottomPosition }
        ]}>
            {Platform.OS === 'ios' ? (
                <BlurView
                    tint={colorScheme === 'dark' ? 'systemThickMaterialDark' : 'systemThickMaterialLight'}
                    intensity={95}
                    style={[styles.content, styles.blurContainer]}>
                    <MiniPlayerContent song={song} isPlaying={isPlaying} onPlayPause={onPlayPause} />
                </BlurView>
            ) : (
                <ThemedView style={[styles.content, styles.androidContainer]}>
                    <MiniPlayerContent song={song} isPlaying={isPlaying} onPlayPause={onPlayPause} />
                </ThemedView>
            )}
        </Pressable>
    );
}

// Extract the content into a separate component for reusability
function MiniPlayerContent({ song, isPlaying, onPlayPause }: {
    song: any;
    isPlaying: boolean;
    onPlayPause: () => void;
}) {
    return (
        <ThemedView style={styles.miniPlayerContent}>
            <Image
                source={{ uri: song.artwork }}
                style={styles.artwork}
            />
            <ThemedView style={styles.textContainer}>
                <ThemedText type="defaultSemiBold">{song.title}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.controls}>
                <Pressable style={styles.controlButton} onPress={onPlayPause}>
                    <Ionicons name={isPlaying ? "pause" : "play"} size={24} />
                </Pressable>
                <Pressable style={styles.controlButton}>
                    <Ionicons name="play-forward" size={24} />
                </Pressable>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 50,
        zIndex: 1000,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        // height: 40,
        marginHorizontal: 10,
        borderRadius: 12,
        overflow: 'hidden',
        zIndex: 1000,
        flex: 1,
        paddingVertical: 0,


    },
    miniPlayerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        paddingHorizontal: 10,
        backgroundColor: '#ffffffa4',

    },
    blurContainer: {
        // backgroundColor: '#00000000',
    },
    androidContainer: {

    },
    artwork: {
        width: 32,
        height: 32,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 12,
        backgroundColor: 'transparent',
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginRight: 4,
        backgroundColor: 'transparent',
    },
    controlButton: {
        padding: 8,
    },
});

interface MiniPlayerProps {
    onPress: () => void;
    song: any;
    sound?: Audio.Sound | null;
    isPlaying: boolean;
    onPlayPause: () => void;
}
