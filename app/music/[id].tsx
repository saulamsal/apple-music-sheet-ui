import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Dimensions } from 'react-native';
import { useEffect, useCallback, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemedView } from '@/components/ThemedView';
import { ExpandedPlayer } from '@/components/BottomSheet/ExpandedPlayer';
import { useRootScale } from '@/app/contexts/RootScaleContext';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { songs } from '@/app/data/songs.json';

const SCALE_FACTOR = 0.83;

export default function MusicScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { setScale } = useRootScale();
    const translateY = useSharedValue(0);
    const isClosing = useRef(false);
    const statusBarStyle = useSharedValue('light');

    const numericId = typeof id === 'string' ? parseInt(id, 10) : Array.isArray(id) ? parseInt(id[0], 10) : 0;
    const song = songs.find(s => s.id === numericId) || songs[0];

    const goBack = useCallback(() => {
        if (!isClosing.current) {
            isClosing.current = true;
            requestAnimationFrame(() => {
                router.back();
            });
        }
    }, [router]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setScale(SCALE_FACTOR);
        }, 0);

        return () => {
            clearTimeout(timeout);
            setScale(1);
        };
    }, []);

    const gesture = Gesture.Pan()
        .onStart(() => {
            'worklet';
            translateY.value = 0;
        })
        .onUpdate((event) => {
            'worklet';
            if (event.translationY > 0) {
                translateY.value = event.translationY;
                const progress = Math.min(event.translationY / 600, 1);
                const newScale = SCALE_FACTOR + (progress * (1 - SCALE_FACTOR));
                setScale(newScale);

                if (newScale > (1 + SCALE_FACTOR) / 2) {
                    statusBarStyle.value = 'dark';
                } else {
                    statusBarStyle.value = 'light';
                }
            }
        })
        .onEnd((event) => {
            'worklet';
            if (event.translationY > 100) {
                setScale(1);
                translateY.value = event.translationY;
                runOnJS(goBack)();
            } else {
                translateY.value = withSpring(0, {
                    damping: 15,
                    stiffness: 150,
                });
                setScale(SCALE_FACTOR);
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
        opacity: withSpring(1),
    }));

    return (
        <ThemedView style={styles.container}>
            <StatusBar animated={true} style={statusBarStyle.value} />
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.modalContent, animatedStyle]}>
                    <ExpandedPlayer />
                </Animated.View>
            </GestureDetector>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    modalContent: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});
