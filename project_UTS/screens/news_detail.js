import React, {Component} from "react";
import { 
    Text, 
    View, 
    Linking,
    ScrollView,
    Image,
} from "react-native";
import Separator from "../components/separator";
import Button from "../components/button";

class NewsDetail extends Component{
    render(){
        const {route} = this.props;
        const data = route.params.data;

        return(
            <ScrollView>
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
                        <Text className="font-bold border-b pb-2 mt-2">Published: {data.date}</Text>
                        <Separator height={10}/>
                        <Separator height={10} />
                        
                        <Separator height={5} />
                        <Text className={content}>{data.content}</Text>
                        <Separator height={20} />
                        <Button
                            text="READ MORE"
                            onPress={() =>
                            Linking.openURL(data.link).catch((err) => console.error("Error", err))
                            }
                        />
                </View> 
                 
            </ScrollView>
        )
    }
}

export default NewsDetail;

const image = "h-64 w-auto justify-center items-center"
const content = "text-justify text-lg text-black"