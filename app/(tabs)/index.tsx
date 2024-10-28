import { Text, Image, View, StyleSheet, Platform, Pressable, FlatList } from 'react-native';
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
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);

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
          <ThemedView style={{
            flex: 1, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0,
            backgroundColor: '#f57a8a',
            alignItems: 'center',
          }}>

            <Text style={{ fontSize: 18, letterSpacing: -0.5, alignSelf: 'center', position: 'absolute', top: 80 }}>
              Built with Expo
            </Text>
            <Image
              source={{
                uri: 'https://logos-world.net/wp-content/uploads/2020/11/Apple-Music-Logo.png'
              }}
              style={styles.reactLogo}
            />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              <View style={styles.headerButtons}>
                <Pressable
                  style={styles.headerButton}
                  onPress={() => {
                    setSelectedSongId(songs[0].id);
                    router.push(`/music/${songs[0].id}`);
                  }}
                >
                  <Ionicons name="play-circle" size={24} color="#fff" />
                  <Text style={styles.headerButtonText}>Play</Text>
                </Pressable>
                <Pressable
                  style={styles.headerButton}
                  onPress={() => {
                    const randomSong = songs[Math.floor(Math.random() * songs.length)];
                    setSelectedSongId(randomSong.id);
                    router.push(`/music/${randomSong.id}`);
                  }}
                >
                  <Ionicons name="shuffle" size={24} color="#fff" />
                  <Text style={styles.headerButtonText}>Shuffle</Text>
                </Pressable>
              </View>

            </View>

          </ThemedView>
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

      {selectedSongId && (
        <MiniPlayer
          song={selectedSong}
          onPress={() => router.push(`/music/${selectedSong.id}`)}
        />
      )}
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
    height: 70,
    width: 200,
    bottom: 0,
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
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    position: 'absolute',
    bottom: 20,
    // width: '100%',

    marginHorizontal: 20,
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
    flex: 1,
    justifyContent: 'center',
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
