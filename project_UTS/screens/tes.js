import React, {Component} from "react";
import { 
    Text, 
    View, 
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    ImageBackground
} from "react-native";
import Separator from "../components/separator";
import Button from "../components/button";

const windowWidth = Dimensions.get("window").width;

class Tes extends Component{
    render(){
        const {route} = this.props;
        const data = route.params.data;

        return(
            <ScrollView className="bg-blend-darken">
                <Image
                    className={image}
                    source={{ uri: data.image }}
                >
                </Image>
                <View className="flex-1 p-6">
                    <Separator height={10} />
                        <Text
                            className="text-xl text-black font-bold"
                        >{data.title}</Text>
                        <Separator height={5}/>
                        <Text className="border-b "></Text>
                        <Text className="font-bold border-b pb-2 mt-1">Published: {data.date}</Text>
                        <Separator height={10}/>
                        <Separator height={10} />
                        
                        <Separator height={5} />
                        <Text className={content}>{data.content}</Text>
                        <Separator height={20} />
                        <Button
                            text="read more"
                            onPress={() =>
                            Linking.openURL(data.link).catch((err) => console.error("Error", err))
                            }
                        />
                </View> 
                 
            </ScrollView>
        )
    }
}

export default Tes;

const container = "flex-1 p-6"
const image = "h-64 w-auto justify-center items-center"
const content = "text-justify text-lg text-black"
const button = "mt-10 w-68% justify-center items-center"