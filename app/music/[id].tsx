import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Dimensions } from 'react-native';
import { useEffect, useCallback } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ExpandedPlayer } from '@/components/BottomSheet/ExpandedPlayer';
import { useRootScale } from '@/app/contexts/RootScaleContext';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

const SONG = { id: '1', title: 'vampire', artist: 'Olivia Rodrigo', year: 2023 };
const SCALE_FACTOR = 0.85;

export default function MusicScreen() {
    const router = useRouter();
    const { setScale } = useRootScale();
    const translateY = useSharedValue(0);

    const goBack = useCallback(() => {
        router.back();
    }, [router]);

    useEffect(() => {
        setScale(SCALE_FACTOR);
        return () => setScale(1);
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
                // Interpolate scale based on translation
                const progress = Math.min(event.translationY / 300, 1);
                const newScale = SCALE_FACTOR + (progress * (1 - SCALE_FACTOR));
                setScale(newScale);
            }
        })
        .onEnd((event) => {
            'worklet';
            if (event.translationY > 100) {
                translateY.value = withSpring(500, {}, (finished) => {
                    if (finished) {
                        runOnJS(goBack)();
                    }
                });
                setScale(1);
            } else {
                translateY.value = withSpring(0);
                setScale(SCALE_FACTOR);
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    return (
        <ThemedView style={styles.container}>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.modalContent, animatedStyle]}>
                    <ExpandedPlayer song={SONG} />
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
