import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MiniPlayer } from '@/components/BottomSheet/MiniPlayer';

const SONG = { id: '1', title: 'vampire', artist: 'Olivia Rodrigo', year: 2023 };

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#f57a8a', dark: '#FA2D48' }}
        headerImage={
          <Image
            source={{
              uri: 'https://logos-world.net/wp-content/uploads/2020/11/Apple-Music-Logo.png'
            }}
            style={styles.reactLogo}
          />
        }
        style={styles.scrollView}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Apple Music UI on Expo</ThemedText>
        </ThemedView>
      </ParallaxScrollView>

      <MiniPlayer
        song={SONG}
        onPress={() => router.push('/music/1')}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  reactLogo: {

    height: 100,
    width: 290,
    bottom: 0,
    right: -50,
    top: 100,
    // left: 0,
    // position: 'absolute',
  },
});
