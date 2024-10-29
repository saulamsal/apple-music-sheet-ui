import { Stack } from 'expo-router';
import { router } from 'expo-router';

export default function SearchStack() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerLargeTitle: true,
                    headerLargeTitleStyle: { fontWeight: 'bold' },
                    title: "Search",
                    headerStyle: {

                    },
                    headerSearchBarOptions: {
                        placeholder: "Artists, Songs, Lyrics, and More",
                        onFocus: () => {
                            router.push("/search/search" as any);
                        },
                    }
                }}
            />
        </Stack>
    );
}