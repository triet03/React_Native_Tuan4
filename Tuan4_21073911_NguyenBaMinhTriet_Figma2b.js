import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Tuan4_21073911_NguyenBaMinhTriet_Figma2b

const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const [imageUri, setImageUri] = useState(null);
  const [reviewText, setReviewText] = useState('');

  const selectImage = () => {
    launchImageLibrary({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const submitReview = () => {
    console.log("Rating:", rating);
    console.log("Image:", imageUri);
    console.log("Review:", reviewText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>USB Bluetooth Music Receiver HJX-001</Text>
      <Text style={styles.productDescription}>Biến loa thường thành loa bluetooth</Text>

      {/* Star Rating */}
      <Text style={styles.label}>Cực kỳ hài lòng</Text>
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Icon
              name="star"
              size={30}
              color={star <= rating ? "#FFD700" : "#CCCCCC"}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.imageUpload} onPress={selectImage}>
        <Icon name="camera" size={30} color="#000" />
        <Text style={styles.uploadText}>Thêm hình ảnh</Text>
      </TouchableOpacity>
      {imageUri ? <Image source={{ uri: imageUri }} style={styles.imagePreview} /> : null}

      <TextInput
        style={styles.input}
        placeholder="Hãy chỉ sẻ những điều mà bạn thích về sản phẩm"
        value={reviewText}
        onChangeText={setReviewText}
        multiline={true}
      />

      <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
        <Text style={styles.submitButtonText}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageUpload: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  uploadText: {
    marginLeft: 10,
    fontSize: 16,
  },
  imagePreview: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    height: 100,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductReview;
