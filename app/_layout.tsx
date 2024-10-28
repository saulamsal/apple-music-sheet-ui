import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { RootScaleProvider } from '@/app/contexts/RootScaleContext';
import { useRootScale } from '@/app/contexts/RootScaleContext';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { OverlayProvider } from '@/app/components/Overlay/OverlayProvider';
import { AudioProvider } from '@/app/context/AudioContext';
import { MiniPlayer } from '@/components/BottomSheet/MiniPlayer';
import { useRouter } from 'expo-router';
import { useAudio } from '@/app/context/AudioContext';

function AnimatedStack() {
  const { scale } = useRootScale();
  const router = useRouter();
  const { currentSong, isPlaying, togglePlayPause } = useAudio();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        {
          translateY: (1 - scale.value) * -150,
        },
      ],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.stackContainer, animatedStyle]}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="music/[id]"
            options={{
              presentation: 'transparentModal',
              headerShown: false,
              contentStyle: {
                backgroundColor: 'transparent',
              },
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </Animated.View>

      {currentSong && (
        <MiniPlayer
          song={currentSong}
          isPlaying={isPlaying}
          onPlayPause={togglePlayPause}
          onPress={() => router.push(`/music/${currentSong.id}`)}
        />
      )}
    </View>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootScaleProvider>
          <AudioProvider>
            <OverlayProvider>
              <AnimatedStack />
            </OverlayProvider>
          </AudioProvider>
        </RootScaleProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stackContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 50,
  },
});
