import React, {Component} from "react";
import {
    Image,
    Text,
    View,
    StatusBar
  } from "react-native";
  import Button from "../components/button";
  import Separator from "../components/separator";

const nama = "Elang Satria Putra Buana";
const nim = "1203210001";
const prodi = "Informatika";
const kampus = "Institut Teknologi Telkom Surabaya";

class Home extends Component{
    navigateToNews = () =>{
        this.props.navigation.navigate('News');
    };

    render(){
        return(
            <View className="flex-1">
                <StatusBar style='auto' />

                {/*logo*/}
                <View className="flex-0.5 mt-4">
                    <View className="flex-row justify-center items-center">
                        <Image 
                            className="object-cover w-5 h-10 mr-2" 
                            source={require("../assets/logo.png")}></Image>
                        <Image 
                            className="object-cover w-10 h-20 ml-2" 
                            source={require("../assets/itts_logo.png")}></Image>
                    </View>
                </View>

                {/*profile*/}
                <View className="flex-1 mt-10">
                    <View className=" justify-center items-center">
                        <Image 
                            className="rounded-full w-40 h-40 object-cover"
                            source={require("../assets/jkw.jpg")}>
                        </Image>
                    </View>
                    
                    <Separator height={40}/>

                        <View className="mx-auto w-100%">
                            <Text className="mt-1 text-xl">{nama}</Text>
                            <View className="my-2 border-t-2"></View>

                            <Text className="text-xl">{nim}</Text>
                            <View className="my-2 border-t-2"></View>

                            <Text className="text-xl">{prodi}</Text>
                            <View className="my-2 border-t-2"></View>

                            <Text className="text-xl">{kampus}</Text>
                            <View className="my-2 border-t-2"></View>
                        </View>
                    
                    <View className="mt-20 w-68% justify-center items-center">
                        <Button
                            text="Lihat Berita"
                            onPress={this.navigateToNews}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default Home;
