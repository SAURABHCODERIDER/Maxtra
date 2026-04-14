import { View, StyleSheet, FlatList } from 'react-native';
import Card from './Card';
const cardData = [
  {
    id: "1",
    title: "Leather Bag",
    description: "Premium quality leather bag",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
  {
    id: "2",
    title: "Running Shoes",
    description: "Comfortable sports shoes",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: "3",
    title: "Smart Watch",
    description: "Track your fitness daily",
    rating: 3.8,
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
  },
  {
    id: "4",
    title: "Wireless Earbuds",
    description: "Noise cancelling earbuds",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
  {
    id: "5",
    title: "Backpack",
    description: "Perfect for travel & college",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: "6",
    title: "Sunglasses",
    description: "Stylish UV protection glasses",
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
  {
    id: "7",
    title: "Bluetooth Speaker",
    description: "Portable high quality sound",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
  {
    id: "8",
    title: "Laptop Stand",
    description: "Adjustable ergonomic stand",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: "9",
    title: "Gaming Mouse",
    description: "High precision gaming mouse",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587202372775-9896d3b3f4b7",
  },
  {
    id: "10",
    title: "Keyboard",
    description: "Mechanical RGB keyboard",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: "11",
    title: "Water Bottle",
    description: "Leak proof steel bottle",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1526403228395-1e4a0a6b42b0",
  },
  {
    id: "12",
    title: "Office Chair",
    description: "Comfortable ergonomic chair",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
  {
    id: "13",
    title: "Table Lamp",
    description: "Modern LED desk lamp",
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
  },
  {
    id: "14",
    title: "Mobile Cover",
    description: "Durable shockproof case",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: "15",
    title: "Power Bank",
    description: "Fast charging 20000mAh",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  },
  {
    id: "16",
    title: "Headphones",
    description: "Over-ear noise cancelling",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518444028785-8f2b6d3a1f0b",
  },
  {
    id: "17",
    title: "Camera",
    description: "High resolution DSLR camera",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519183071298-a2962e7e8d6c",
  },
  {
    id: "18",
    title: "Tripod",
    description: "Adjustable camera tripod",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: "19",
    title: "Fitness Band",
    description: "Track steps & heart rate",
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd9cf",
  },
  {
    id: "20",
    title: "Desk Organizer",
    description: "Keep your desk clean",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <Card
              title={item.title}
              description={item.description}
              rating={item.rating}
              imageUrl={item.image}
            />
          </View>
        )}

        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardWrapper: {
    flex: 1,
    flexWrap:"wrap",
    padding:4,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
});

export default Home;