import React from "react";
import {StatusBar, Text } from "react-native";
import {
  AlignItemsLayout,
  DirectionLayout,
  DisplayAnImageWithStyle,
  FixedDimensionsBasics,
  Flex,
  FlexDimensionsBasics,
  FlexDirectionBasics,
  JustifyContentBasics,
  LotsOfStyles,
  NativeBaseExample,
  PercentageDimensionsBasics,
  PositionLayout,
  TodoList,
  WidthHeightBasics,
} from "./screens";

const App = () => {
  return (
    <>
      <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, color:"black"}}>
          Elang Satria Putra Buana (12303210001)
      </Text>
      <StatusBar style={{ padding: 0 }} />

      {/* Panggil Komponen Di Sini */
        // <LotsOfStyles/>
        // <FixedDimensionsBasics/>
        // <FlexDimensionsBasics/>
        // <PercentageDimensionsBasics/>
        // <Flex/>
        // <FlexDirectionBasics/>
        // <JustifyContentBasics/>
        <AlignItemsLayout/>
        // <WidthHeightBasics/>
        // <PositionLayout/>
        // <DisplayAnImageWithStyle/>
        // <NativeBaseExample/>
        // <TodoList/>
      }
    </>
  );
};

export default App;
