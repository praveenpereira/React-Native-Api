import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    ScrollView,
   
} from "react-native";

import data from '../apidata.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true, 
          dataProduct: [], 
        };
      }
      componentDidMount() {
        this.setState({
            isLoading: false, 
            dataProduct: data.product,
          }); 
        }
    render() {
        return (
            <ScrollView> 
                <View style={styles.container}>       
          <View style={{ alignItems:'center'}} >     
         </View> 
          <View>
          <FlatList
          contentContainerStyle={styles.list}
          data={this.state.dataProduct}
          renderItem={({item})=>this._renderItemProduct(item)}
          keyExtractor={(item, index) => index.toString()}
        />
       </View>   
        </View>
      </ScrollView>  
        );
    }
    _renderItemProduct(item){
        return(
          <TouchableOpacity>
            <Text style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>{item.name}</Text>
            <Text style={{textAlign:'center'}}> Product and Details
              <Text style={{fontSize:20,color:'green'}}>${item.price}</Text>
            </Text>
          </TouchableOpacity>
        ) 
      }
  }
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       
    },
    list:{
        padding:70,
    }

});
