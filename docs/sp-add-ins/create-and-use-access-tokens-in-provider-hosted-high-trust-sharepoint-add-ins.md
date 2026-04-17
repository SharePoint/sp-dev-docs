// App.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <View>
      <Text>TrustCart</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>₹{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}
