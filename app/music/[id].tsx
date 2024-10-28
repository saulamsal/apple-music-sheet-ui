import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Animated, PanResponder } from 'react-native';
import { useRef } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ExpandedPlayer } from '@/components/BottomSheet/ExpandedPlayer';

const SONG = { id: '1', title: 'vampire', artist: 'Olivia Rodrigo', year: 2023 };

export default function MusicScreen() {
    const router = useRouter();
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
            if (gesture.dy > 0) {
                pan.y.setValue(gesture.dy);
            }
        },
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dy > 100) {
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
        // borderTopLeftRadius: 12,
        // borderTopRightRadius: 12,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: -2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
});
