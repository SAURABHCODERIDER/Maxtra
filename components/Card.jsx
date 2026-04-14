import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import StarRating from './StarRating';

const Card = ({ title, description, rating, imageUrl }) => {
  return (
    <View style={styles.wrapper}>
      <Image style={{ height: 180, width: 180 }} source={{ uri: imageUrl }} />
      <Text style={styles.itemText}>{title}</Text>
      <Text style={styles.cardDescription} numberOfLines={1}>
        {description}
      </Text>
      <View style={styles.cardContainer}>
        <StarRating ratings={rating} />

        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>-</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    borderColor: '#fff',
    borderWidth: 2,
    elevation: 5,
    padding: 4,
    marginVertical: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  cardDescription: {
    color: '#555',
    fontSize: 14,
    padding: 4,
    marginTop: 4,
  },

  itemText: {
    color: 'red',
    fontSize: 16,
    padding: 4,
    marginTop: 8,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  btn: {
    marginLeft: 20,
    borderColor: 'red',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'rgba(249, 244, 244, 0.44)',
    borderRadius: 8,
    borderColor: '#db5555',
    elevetion:5,
  },
  btnText: {
    color: 'rgba(203, 24, 24, 0.42)',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
