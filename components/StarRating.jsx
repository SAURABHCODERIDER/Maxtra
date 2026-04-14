import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StarRating = ( {rating=5}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));

  return (
    <View style={{ flexDirection: 'row' }}>
      
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Ionicons key={i} name="star" size={16} color="#FFD700" />
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <Ionicons name="star-half-outline" size={16} color="#FFD700" />
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Ionicons key={i} name="star-outline" size={16} color="#ccc" />
      ))}

    </View>
  );
};

export default StarRating;