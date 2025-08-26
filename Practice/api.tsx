import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

const App = () => {
  const [data, setData] = useState<any[]>([]); // data is an array

  const getApiData = async () => {
    try {
      const apiUrl = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(apiUrl);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <ScrollView>
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>Api</Text>
      {
        data.length > 0 ? (
          data.map((item) => (
            <View key={item.id} style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text style={{ fontWeight: 'bold' }}>ID: {item.id}</Text>
              <Text>Title: {item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )
      }
    </ScrollView>
  );
};

export default App;
