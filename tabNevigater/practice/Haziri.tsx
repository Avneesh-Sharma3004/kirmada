import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, Text, TextInput, Button, FlatList, View } from "react-native";

type Entry = {
  id: string;
  name: string;
  time: string;
};

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState<Entry[]>([]);

  const addNameWithTime = () => {
    if (name.trim() === "") return;

    const currentTime = new Date().toLocaleTimeString();
    const newEntry: Entry = { id: Date.now().toString(), name, time: currentTime };

    setList([...list, newEntry]);
    setName("");
  };

  const clearList = () => {
    setList([]); // लिस्ट खाली कर दो
  };

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <Text style={{ fontSize: 20 }}>Entry</Text>

      <TextInput
        style={{
          fontSize: 18,
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 10,
          margin: 5,
          paddingHorizontal: 10,
        }}
        placeholder="Name likho apna"
        value={name}
        onChangeText={(text) => setName(text)}
        onSubmitEditing={addNameWithTime}
      />

      <TouchableOpacity onPress={addNameWithTime} style={{backgroundColor:"#a9a9a9",borderWidth:1,borderRadius:10,width:100,height:30,alignItems:"center",marginLeft:"32%",marginTop:10}} >
        <Text>Haziri Lago</Text>
      </TouchableOpacity>

      {/* Clear List Button */}
      {list.length > 0 && (
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity  onPress={clearList} style={{backgroundColor:"#a9a9a9",borderWidth:1,borderRadius:10,width:100,height:30,alignItems:"center",marginLeft:"32%",marginTop:10}}>
            <Text>Clear List</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={{ marginVertical: 10, fontWeight: "bold" }}>List:</Text>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 16 }}>
            {item.name} — {item.time}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}
