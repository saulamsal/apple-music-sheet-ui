import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { CategoryCard } from '@/components/CategoryCard';
import { Ionicons } from '@expo/vector-icons';

const categories = [
    {
        "artworkBgColor": "#031312",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/71/cb/37/71cb3751-1b55-41ae-9993-68f0682189fc/U0gtTVMtV1ctSGFsbG93ZWVuLU92ZXJhcmNoaW5nLnBuZw.png/1040x586sr.webp",
        "title": "Halloween"
    },
    {
        "artworkBgColor": "#f83046",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/cc/54/da/cc54dac4-4972-69d2-9a5b-462d2d1ee8a6/c940e51b-6644-4b17-a714-1c898f669fb5.png/1040x586sr.webp",
        "title": "Spatial Audio"
    },
    {
        "artworkBgColor": "#6b8ce9",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/fc/16/77/fc16775e-522b-d5c7-16ea-f5a7947ba9e2/1a7e6d73-b9c0-4ed2-a6a2-942900d1ce26.png/1040x586sr.webp",
        "title": "Hip-Hop"
    },
    {
        "artworkBgColor": "#d18937",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/08/37/a9/0837a924-1d3a-7987-b179-b61c14222e5e/d27004f3-3a1f-4d0c-ae9a-d12425eec39e.png/1040x586sr.webp",
        "title": "Country"
    },
    {
        "artworkBgColor": "#e46689",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1d/43/86/1d438675-0ec5-b7c3-84aa-ab011159b921/db3b6833-715a-4119-9706-f8c51b6cf0c0.png/1040x586sr.webp",
        "title": "Pop"
    },
    {
        "artworkBgColor": "#ebbada",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e3/01/4e/e3014ee5-004a-f936-03a2-f8b4f4904666/64857193-8605-490a-9699-04f4e6638719.png/1040x586sr.webp",
        "title": "Apple Music Live"
    },
    {
        "artworkBgColor": "#4e246e",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/66/44/63/6644636a-6134-e464-32e6-a7900d583ce8/bcb74429-1303-4fb0-9c3f-a6f0b87eb86e.png/1040x586sr.webp",
        "title": "Sleep"
    },
    {
        "artworkBgColor": "#595920",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/4c/59/c8/4c59c8c1-d144-dcef-b895-09204781995a/2362fc03-e10d-4b56-aca1-015246a9229d.png/1040x586sr.webp",
        "title": "Charts"
    },
    {
        "artworkBgColor": "#28585e",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/0f/17/d5/0f17d5a3-6774-1ae1-4530-2b694d8fb6bf/d7944211-2928-4ccc-b382-f0564bcf00b2.png/1040x586sr.webp",
        "title": "Chill"
    },
    {
        "artworkBgColor": "#8e75d8",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/58/1d/ff/581dfff1-b631-4302-fba7-8e2364ace98d/f2bec4ab-0d3c-46e1-98dd-a0a1588dae30.png/1040x586sr.webp",
        "title": "R&B"
    },
    {
        "artworkBgColor": "#dd4a82",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/08/a3/d4/08a3d409-a1d4-8d3d-bd44-92f6b211a7c3/2b0a4241-2168-43a7-8ae6-5e54696e5ec2.png/1040x586sr.webp",
        "title": "Latin"
    },
    {
        "artworkBgColor": "#3cbb7d",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e9/40/4b/e9404be8-f887-2573-06e1-7a259af3c6a9/1c1dc89d-8fe5-4554-b2f0-963f375b58c0.png/1040x586sr.webp",
        "title": "Dance"
    },
    {
        "artworkBgColor": "#fa3348",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/12/de/da/12deda1c-4c53-3bef-91d7-c1c7ec3725f2/a0e305b8-db6a-4c6e-819a-d45936097194.png/1040x586sr.webp",
        "title": "DJ Mixes"
    },
    {
        "artworkBgColor": "#ddb71e",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/ea/c3/b1/eac3b150-ad9e-1086-4284-b4e6b43757d7/2520a131-0639-423c-b167-9b73931e5cb0.png/1040x586sr.webp",
        "title": "Hits"
    },
    {
        "artworkBgColor": "#808a20",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/20/fe/98/20fe9879-9f3c-67d7-9a29-c26ea4624498/a023fa37-e402-416b-a034-47dbc3c0003f.png/1040x586sr.webp",
        "title": "Fitness"
    },
    {
        "artworkBgColor": "#70441b",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/30/e6/42/30e64278-008f-b3df-6790-bdd7fe382360/f3639799-0252-4a92-b3d4-3df02f586e29.png/1040x586sr.webp",
        "title": "Feel Good"
    },
    {
        "artworkBgColor": "#9f3873",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/13/12/7d/13127dc4-9c81-099c-31a7-afb849518840/06e568d2-c588-448f-8721-1739e6ac2f2f.png/1040x586sr.webp",
        "title": "Party"
    },
    {
        "artworkBgColor": "#c4bc1e",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/34/7a/f4/347af4f3-a90b-e6a6-0244-f03ae159cf21/27107b4f-fb04-43d9-beed-8f315445fce9.png/1040x586sr.webp",
        "title": "Alternative"
    },
    {
        "artworkBgColor": "#db6646",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/8a/b7/2d/8ab72d43-2134-f98f-84a8-301c5653d07f/4b68c547-2be2-4bdd-974b-36d1a3e1bf3a.png/1040x586sr.webp",
        "title": "Rock"
    },
    {
        "artworkBgColor": "#da5c39",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/03/53/b9/0353b95e-089e-63d9-5f1a-e07dbe85ae14/62e5b81d-fef3-46d0-b33b-537d1e85f24f.png/1040x586sr.webp",
        "title": "Classic Rock"
    },
    {
        "artworkBgColor": "#744808",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/32/52/4d/32524d36-af28-8bfe-ac7c-66494ee10362/8540fcf4-af4a-4943-af34-1355797f90e1.png/1040x586sr.webp",
        "title": "Focus"
    },
    {
        "artworkBgColor": "#351433",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e1/3c/80/e13c8044-bd0b-bb30-61b0-439123c83af7/6fd5f161-9e42-42ee-9257-f17dd321d34f.png/1040x586sr.webp",
        "title": "Essentials"
    },
    {
        "artworkBgColor": "#2caaaf",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/ef/32/2c/ef322c4f-9ee2-b57e-ce35-d0c3adc2dce5/1b3cfebe-2ff7-49d3-bf4c-1549729faf06.png/1040x586sr.webp",
        "title": "Christian"
    },
    {
        "artworkBgColor": "#63377b",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/e2/28/4f/e2284f11-e4a5-ce12-3281-6cfa993928e5/329b7acb-044a-414a-8227-78750bdfb511.png/1040x586sr.webp",
        "title": "Classical"
    },
    {
        "artworkBgColor": "#c48820",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/f5/6e/46/f56e4626-b04b-b8e2-3c31-42d3e671df9c/b9972b6d-009d-4d6e-81f6-5254a77eea89.png/1040x586sr.webp",
        "title": "Música Mexicana"
    },
    {
        "artworkBgColor": "#da5c39",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/0f/1f/cd/0f1fcd6d-a660-259f-d2c4-319761070011/861cb0eb-168a-46cd-8585-c2e3f316f55b.png/1040x586sr.webp",
        "title": "Hard Rock"
    },
    {
        "artworkBgColor": "#af2d5f",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/d0/b6/dc/d0b6dc3a-8063-f2a3-152f-afd8c36b22b9/2d56098f-42f6-41fb-92dd-13bb5a2ee7db.png/1040x586sr.webp",
        "title": "Urbano Latino"
    },
    {
        "artworkBgColor": "#e46689",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/a2/da/d8/a2dad825-c24c-6cf6-0266-a8f4ac6c2ef8/daf15085-ea0a-4665-ac79-c9e2e94dfe7d.png/1040x586sr.webp",
        "title": "K-Pop"
    },
    {
        "artworkBgColor": "#58b556",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/bb/0e/29/bb0e29d9-7645-7ab0-f2c9-540c2f4eec2f/ca0818f2-a6db-4f9d-a1ae-3fef4d9ea10d.png/1040x586sr.webp",
        "title": "Kids"
    },
    {
        "artworkBgColor": "#4aaf49",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/ac/1b/f8/ac1bf8a7-c4fb-a1b0-90aa-3c9a7afd5f28/aadcdfed-207b-4961-9884-a37a64eb9bcd.png/1040x586sr.webp",
        "title": "Family"
    },
    {
        "artworkBgColor": "#21265c",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/c9/ae/47/c9ae4709-c461-f729-23ef-2c68ad37341e/e5bf281e-54e4-46dc-b9a2-ca961cc99f81.png/1040x586sr.webp",
        "title": "Music Videos"
    },
    {
        "artworkBgColor": "#f83046",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/4f/db/a1/4fdba177-3af6-6bb7-2f43-7938e1f227a6/74e5adc8-240b-40e6-ad09-c54f426283bd.png/1040x586sr.webp",
        "title": "Up Next"
    },
    {
        "artworkBgColor": "#755323",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/56/76/7d/56767d51-89b9-e6ce-2e7b-c8c3cf954f47/e23544e8-6aad-45e7-b555-5695fd5f883a.png/1040x586sr.webp",
        "title": "Decades"
    },
    {
        "artworkBgColor": "#e25a80",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/75/6e/5e/756e5e72-22bc-57de-7f2b-c6d042417879/00eb9147-24ac-4223-842e-519e19f36f7f.png/1040x586sr.webp",
        "title": "Pop Latino"
    },
    {
        "artworkBgColor": "#ae2b29",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/b5/c6/d2/b5c6d2ad-0e69-1d37-d7a0-3699d4f4909b/2b419129-d471-44fd-bbfa-2d36d07a6787.png/1040x586sr.webp",
        "title": "Metal"
    },
    {
        "artworkBgColor": "#dab10d",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/e9/73/69/e97369b3-c68c-1047-6086-08ae0c747469/9d4f61ac-4d2f-4546-98b3-4db3b1ccb01b.png/1040x586sr.webp",
        "title": "2000s"
    },
    {
        "artworkBgColor": "#34b799",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/72/0f/7b/720f7bc9-97dd-9665-8394-aee9f279fa2a/9222ca98-8663-4ae9-889b-79eb10fe5acb.png/1040x586sr.webp",
        "title": "Indie"
    },
    {
        "artworkBgColor": "#3cbb7d",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/63/a2/0b/63a20b1e-f138-8ba9-5c1f-b1533907ce42/ed74c8f0-2343-4c38-b3e3-e29cb75afbe4.png/1040x586sr.webp",
        "title": "Electronic"
    },
    {
        "artworkBgColor": "#363110",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/ad/69/1c/ad691cf0-f626-6050-3361-28e0995849bf/f964cbb9-d787-4faf-97b8-73958872c4c1.png/1040x586sr.webp",
        "title": "Behind the Songs"
    },
    {
        "artworkBgColor": "#29a5c9",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/64/34/e6/6434e622-46be-5e71-74ba-44b74e98c3a3/a16e4f0f-9eed-4f8d-8d14-b960760dccf5.png/1040x586sr.webp",
        "title": "Jazz"
    },
    {
        "artworkBgColor": "#7ab539",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/90/cd/5b90cd44-2a7d-39aa-2992-f3af5b9f98b1/335ccbc3-fcdd-4082-8367-fe8df5ffd9ad.png/1040x586sr.webp",
        "title": "Reggae"
    },
    {
        "artworkBgColor": "#0a070f",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/d0/69/d3/d069d3d0-b4ea-07a3-a95c-7f025adf8f60/4e941745-d668-49d1-90c3-c2a53340097f.png/1040x586sr.webp",
        "title": "Film, TV & Stage"
    },
    {
        "artworkBgColor": "#881834",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/01/42/38/0142387d-608e-45d2-c839-fb534d5d4259/1e691432-e96a-4042-aea5-79c6d0bbb9af.png/1040x586sr.webp",
        "title": "Motivation"
    },
    {
        "artworkBgColor": "#8280e7",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/46/52/f7/4652f73c-1785-4273-3282-2c4b116597d6/9a4c5c53-a845-48b2-a1a6-762f4e688df8.png/1040x586sr.webp",
        "title": "Soul/Funk"
    },
    {
        "artworkBgColor": "#53b69e",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/e2/e4/ef/e2e4ef7e-2611-91a2-bd17-faefa1ac23a7/009cfa78-893d-4e6a-8c8d-2592de8b83f7.png/1040x586sr.webp",
        "title": "Wellbeing"
    },
    {
        "artworkBgColor": "#dab10d",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/17/9d/5e/179d5e31-c15a-08f8-78eb-a7e83ecbf2f0/d676ae15-36eb-4748-9a67-1bdb5ba8efaa.png/1040x586sr.webp",
        "title": "2010s"
    },
    {
        "artworkBgColor": "#dab10d",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/73/c5/16/73c51608-bb46-c3f4-ee8f-44f534829ca4/8d7abe21-9bc8-49bc-b8ff-8e948ec081b3.png/1040x586sr.webp",
        "title": "’60s"
    },
    {
        "artworkBgColor": "#cd8028",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/b1/86/89/b1868989-f8c4-2e7a-b3ea-317ae3b72aa1/6f017db2-efe7-4c64-bddf-2d909e2f4ae2.png/1040x586sr.webp",
        "title": "Americana"
    },
    {
        "artworkBgColor": "#4997d5",
        "artworkImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/5d/f0/0d/5df00dca-a4b7-2da5-026c-84dd8520de75/14a698b9-248f-4ea9-8f02-1a341c401735.png/1040x586sr.webp",
        "title": "Blues"
    }
]

export default function SearchScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Search</Text>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Artists, Songs, Lyrics, and More"
                    placeholderTextColor="#666"
                />
                <Ionicons name="mic" size={20} color="#666" style={styles.micIcon} />
            </View>

            <Text style={styles.sectionTitle}>Browse Categories</Text>

            <View style={styles.categoriesContainer}>
                {categories.map((category, index) => (
                    <View key={index} style={styles.categoryWrapper}>
                        <CategoryCard
                            title={category.title}
                            backgroundColor={category.artworkBgColor}
                            imageUrl={category.artworkImage}
                        />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 12,
        marginBottom: 32,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        marginLeft: 8,
        color: '#000',
    },
    searchIcon: {
        marginLeft: 4,
    },
    micIcon: {
        marginRight: 4,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    categoryWrapper: {
        width: '48%',
    },
}); 