import { View } from "react-native";
import React, { Component } from "react";
import * as Animatable from 'react-native-animatable';
import Separator from "../components/separator";

class Splash extends Component{
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('Home');
        }, 2000);
    }

    render(){
        return(
            <View className={splashStyle}>
                <Animatable.Image 
                    className={animateImage}
                    source={require("../assets/if.png")}
                    animation="fadeIn"
                    duration={2000}
                >
                </Animatable.Image>

                <Separator height={20} />

                <Animatable.Text 
                    className={animateText}
                    animation="fadeIn"
                    duration={2000}
                >
                    Portal Berita ITTS
                </Animatable.Text>
            </View>
        )
    }
}

export default Splash;

const splashStyle = "flex-1 justify-center items-center bg-#FFFFFF";
const animateText = "text-4xl text-black font-bold";
const animateImage = "w-40 h-40";