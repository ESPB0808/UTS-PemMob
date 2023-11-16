import React, {Component} from "react";
import { 
    Text, 
    View, 
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import { Image } from "react-native-animatable";

class News extends Component{
    navigateToDetailNews = () =>{
        this.props.navigation.navigate('DetailNews');
    };

    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true,
        };
    }

    async getNews(){
        try{
            const response = await fetch("https://raw.githubusercontent.com/dauditts/pm-static-api/main/articles.json");
            const json = await response.json();
            this.setState({ data: json.articles});
        } catch(error){
            console.error(error);
        } finally{
            this.setState({ isLoading: false });
        }
    }

    componentDidMount(){
        this.getNews();
    }

    renderItem = ({ item }) => {
        const {navigation} = this.props;
        return (
            <TouchableOpacity 
                className={line}
                onPress={() => navigation.navigate("DetailNews", { data: item })}
            >

                <View className="flex-row items-center">
                    <Image
                        source={{ uri: item.image }}
                        className={itemImage}
                    />
                    <View className={textContainer}>
                        <Text className={itemTitle}>
                            {item.title}
                        </Text>
                        <Text className={Published}>
                                Published: {item.date}
                        </Text>
                        <Text>
                            {item.data}
                        </Text>
                    </View>
                </View>    
            </TouchableOpacity>
        );       
    };

    render(){
        const { data, isLoading } = this.state;
        return(
            <View className={container}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#AA0002" />
                ) : (
                    
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={this.renderItem}
                    />
                )}
            </View>
        )
    }
}

export default News;

const container = "flex-1 p-15 justify-center"
const line = "border-b p-15"
const itemImage ="h-28 w-32 ml-2"
const itemTitle = "text-base text-black"
const Published = "text-sm mt-2"
const textContainer = "flex-1 ml-2"