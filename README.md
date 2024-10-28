# Apple Music Sheet UI Demo with Expo

This project demonstrates an implementation of the Apple Music player UI in React Native using Expo, with a focus on replicating the smooth sheet transitions and scaling animations.

## Features

- 🎵 Full-screen music player modal with gesture controls
- 🔄 Smooth scaling animations of the root content
- 👆 Interactive pan gesture handling
- 📱 iOS-style sheet presentation
- 🎨 Dynamic border radius animations

## Tech Stack

- [Expo](https://expo.dev) - React Native development platform
- [Expo Router](https://docs.expo.dev/router/introduction) - File-based routing
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - Smooth animations
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) - Native-driven gesture handling

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npx expo start
   ```

3. Open in iOS Simulator or Android Emulator:
   - Press `i` for iOS
   - Press `a` for Android

## Implementation Details

The project showcases several key features of modern React Native development:

- Shared element transitions
- Gesture-based interactions
- Context-based animation state management
- Worklet-based animations for optimal performance

## Project Structure

```
app/
├── contexts/
│   └── RootScaleContext.tsx    # Scale animation context
├── components/
│   └── BottomSheet/
│       ├── ExpandedPlayer.tsx  # Full-screen player
│       └── MiniPlayer.tsx      # Minimized player
└── music/
    └── [id].tsx               # Music player screen
```

## Contributing

Feel free to contribute to this project by:

1. Forking the repository
2. Creating a feature branch
3. Submitting a pull request

## License

This project is open source and available under the MIT License.
