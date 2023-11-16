import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import Splash from "./screens/splash";
import News from "./screens/news";
import DetailNews from "./screens/news_detail";

const Stack = createNativeStackNavigator();

const headerStyle = {
  headerTitleStyle: { color: "white" },
  headerStyle: {
    backgroundColor: "#AA0002",
  },
  headerTintColor: "white",
};

class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}
        >
        <Stack.Screen name="Splash" component={Splash}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen
            name="News"
            component={News}
            options={{
              title: "Portal Berita ITTS",
              ...headerStyle,
              headerShown: true,
           }}
          />
          <Stack.Screen
            name="DetailNews"
            component={DetailNews}
            options={{
              title: "Portal Berita ITTS",
              ...headerStyle,
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;