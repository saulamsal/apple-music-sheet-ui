import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const POPULAR_SONGS = [
  { id: '1', title: 'vampire', artist: 'Olivia Rodrigo', year: 2023 },
  { id: '2', title: 'Last Night', artist: 'Morgan Wallen', year: 2023 },
  { id: '3', title: 'Rich Flex', artist: 'Drake & 21 Savage', year: 2023 },
  { id: '4', title: 'Anti-Hero', artist: 'Taylor Swift', year: 2023 },
  { id: '5', title: 'Kill Bill', artist: 'SZA', year: 2023 },
  { id: '6', title: 'Cruel Summer', artist: 'Taylor Swift', year: 2024 },
  { id: '7', title: 'Paint The Town Red', artist: 'Doja Cat', year: 2023 },
  { id: '8', title: 'Flowers', artist: 'Miley Cyrus', year: 2023 },
  { id: '9', title: 'Rich Baby Daddy', artist: 'Drake, Sexyy Red & SZA', year: 2023 },
  { id: '10', title: 'Water', artist: 'Tyla', year: 2024 },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Popular Tracks</ThemedText>
      </ThemedView>

      <ThemedView style={styles.songsContainer}>
        {POPULAR_SONGS.map((song) => (
          <Pressable
            key={song.id}
            style={styles.songItem}
            onPress={() => router.push(`/music/${song.id}`)}>
            <ThemedView>
              <ThemedText type="defaultSemiBold">{song.title}</ThemedText>
              <ThemedText style={styles.artistText}>{song.artist}</ThemedText>
            </ThemedView>
          </Pressable>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  songsContainer: {
    gap: 16,
  },
  songItem: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  artistText: {
    fontSize: 14,
    opacity: 0.7,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
