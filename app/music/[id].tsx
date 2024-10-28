import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Animated, PanResponder, View } from 'react-native';
import { useRef, useEffect } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ExpandedPlayer } from '@/components/BottomSheet/ExpandedPlayer';
import { useOverlayView } from '@/app/hooks/useOverlayView';

const SONG = { id: '1', title: 'vampire', artist: 'Olivia Rodrigo', year: 2023 };

const Overlay = () => (
    <View style={styles.overlay} />
);

export default function MusicScreen() {
    const router = useRouter();
    const pan = useRef(new Animated.ValueXY()).current;
    const { show, hide } = useOverlayView();

    useEffect(() => {
        // Show overlay when component mounts
        show(<Overlay />);

        // Hide overlay when component unmounts
        return () => hide();
    }, []);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
            if (gesture.dy > 0) {
                pan.y.setValue(gesture.dy);
            }
        },
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dy > 100) {
                hide(); // Hide overlay before going back
                router.back();
            } else {
                Animated.spring(pan.y, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
            }
        },
    });

    return (
        <ThemedView style={styles.container}>
            <Animated.View
                style={[
                    styles.modalContent,
                    {
                        transform: [{ translateY: pan.y }],
                    },
                ]}
                {...panResponder.panHandlers}>
                <ExpandedPlayer song={SONG} />
            </Animated.View>
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
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    },
});
