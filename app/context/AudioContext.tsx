import { createContext, useContext, useState, useEffect } from 'react';
import { Audio } from 'expo-av';

interface Song {
    id: string;
    title: string;
    artist: string;
    artwork: string;
    artwork_bg_color?: string;
    mp4_link?: string;
}

interface AudioContextType {
    sound: Audio.Sound | null;
    isPlaying: boolean;
    currentSong: Song | null;
    position: number;
    duration: number;
    setSound: (sound: Audio.Sound | null) => void;
    setIsPlaying: (isPlaying: boolean) => void;
    setCurrentSong: (song: Song) => void;
    playSound: (song: Song) => Promise<void>;
    pauseSound: () => Promise<void>;
    togglePlayPause: () => Promise<void>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    const playSound = async (song: Song) => {
        try {
            // If there's already a sound playing, stop it
            if (sound) {
                await sound.unloadAsync();
            }

            const { sound: newSound } = await Audio.Sound.createAsync(
                { uri: song.mp4_link },
                { shouldPlay: true },
                onPlaybackStatusUpdate
            );

            setSound(newSound);
            setCurrentSong(song);
            setIsPlaying(true);
            await newSound.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    };

    const pauseSound = async () => {
        if (sound) {
            await sound.pauseAsync();
            setIsPlaying(false);
        }
    };

    const togglePlayPause = async () => {
        if (!sound || !currentSong) return;

        if (isPlaying) {
            await pauseSound();
        } else {
            await sound.playAsync();
            setIsPlaying(true);
        }
    };

    const onPlaybackStatusUpdate = (status: any) => {
        if (status.isLoaded) {
            setPosition(status.positionMillis);
            setDuration(status.durationMillis || 0);
            setIsPlaying(status.isPlaying);
        }
    };

    return (
        <AudioContext.Provider value={{
            sound,
            isPlaying,
            currentSong,
            position,
            duration,
            setSound,
            setIsPlaying,
            setCurrentSong,
            playSound,
            pauseSound,
            togglePlayPause,
        }}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
}
