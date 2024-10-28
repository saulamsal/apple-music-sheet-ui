import { View, Text, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

type CategoryCardProps = {
    title: string;
    backgroundColor: string;
    imageUrl?: string;
    size?: 'large' | 'small';
};

export function CategoryCard({ title, backgroundColor, imageUrl, size = 'small' }: CategoryCardProps) {
    return (
        <Link href={`/category/${title.toLowerCase()}`} asChild>
            <Pressable>
                <View
                    style={{
                        width: '100%',
                        aspectRatio: 1.5,
                        backgroundColor,
                        borderRadius: 10,
                        overflow: 'hidden',
                    }}>
                    {imageUrl && (
                        <ImageBackground
                            source={{ uri: imageUrl }}
                            style={{
                                width: '100%',
                                height: '100%',
                                justifyContent: 'flex-end',
                            }}>
                            <View style={{ padding: 16 }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 24,
                                        fontWeight: '600',
                                    }}>
                                    {title}
                                </Text>
                            </View>
                        </ImageBackground>
                    )}
                    {!imageUrl && (
                        <View style={{
                            padding: 16,
                            flex: 1,
                            justifyContent: 'flex-end'
                        }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: '600',
                                }}>
                                {title}
                            </Text>
                        </View>
                    )}
                </View>
            </Pressable>
        </Link>
    );
} 