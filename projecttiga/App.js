import React from "react";
import { View, Text } from "react-native";
import {
  PressableScreen,
  StackHookScreen,
  StackScreen,
  TouchableScreen,
  StackParamScreen
} from "./screens";

const App = () => {
  return (
    <View style={{ paddingTop: 0, flex: 1 }}>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, color:"black"}}>
          Elang Satria Putra Buana (12303210001)
      </Text>
      {/* Panggil Screen Komponen Di Sini */
        // <PressableScreen/>
        // <StackHookScreen/>
        // <StackScreen/>
        // <TouchableScreen/>
        <StackParamScreen/>
      }
    </View>
  );
};

export default App;
