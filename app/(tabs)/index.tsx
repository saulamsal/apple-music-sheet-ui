import { Image, StyleSheet, Platform, Pressable, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MiniPlayer } from '@/components/BottomSheet/MiniPlayer';
import { songs } from '@/app/data/songs.json';

interface Song {
  id: string;
  title: string;
  artist: string;
  artwork: string;
}

export default function HomeScreen() {
  const router = useRouter();
  const [selectedSongId, setSelectedSongId] = useState(songs[0].id);

  const renderSongItem = ({ item }: { item: Song }) => (
    <Pressable
      onPress={() => {
        setSelectedSongId(item.id);
        router.push(`/music/${item.id}`);
      }}
      style={styles.songItem}
    >
      <Image source={{ uri: item.artwork }} style={styles.songArtwork} />
      <ThemedView style={styles.songInfo}>
        <ThemedText type="defaultSemiBold" numberOfLines={1} style={styles.songTitle}>
          {item.title}
        </ThemedText>
        <ThemedView style={styles.artistRow}>
          {item.id === selectedSongId && (
            <Ionicons name="musical-note" size={16} color="#FA2D48" />
          )}
          <ThemedText type="subtitle" numberOfLines={1} style={styles.songArtist}>
            {item.artist}
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <Pressable style={styles.moreButton}>
        <MaterialIcons name="more-vert" size={24} color="#666" />
      </Pressable>
    </Pressable>
  );

  const selectedSong = songs.find(s => s.id === selectedSongId) || songs[0];

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
        contentContainerStyle={styles.scrollView}
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedView style={styles.titleRow}>
            <ThemedText type="title">Billboard Top 20</ThemedText>
            <Ionicons name="trending-up" size={24} color="#FA2D48" />
          </ThemedView>
          <ThemedText type="subtitle">
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </ThemedText>
        </ThemedView>

        <FlatList
          data={songs}
          renderItem={renderSongItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </ParallaxScrollView>

      <MiniPlayer
        song={selectedSong}
        onPress={() => router.push(`/music/${selectedSong.id}`)}
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
    flexDirection: 'column',
    gap: 8,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 100,
    width: 290,
    bottom: 0,
    right: -50,
    top: 100,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
  },
  songArtwork: {
    width: 56,
    height: 56,
    borderRadius: 4,
  },
  songInfo: {
    flex: 1,
    gap: 4,
  },
  artistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  songTitle: {
    fontSize: 16,
  },
  songArtist: {
    fontSize: 14,
    opacity: 0.7,
  },
  moreButton: {
    padding: 8,
  },
});
