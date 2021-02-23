import React from 'react'; 
import { Text, View, Button} from 'react-native';
import Data from './data.json';
import  {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 
import CardView from 'react-native-cardview' ;


 class App extends React.Component {
    
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     
        <CardView style={{alignItems:'center',justifyContent:'center',width:400,height:150,backgroundColor:'grey'}}>
        <Button title="Show me shop list"
          color='black'
          onPress={()=>{this.props.navigation.navigate("ShopList")}}
        />
        </CardView>

      </View>
    )
}
}
function List(){

  return(
    <View>
      <View>{Data.map(post=>{
        return(
          
          <View style={{paddingVertical:6,paddingHorizontal:9,backgroundColor:'white',marginTop:15}}>
          
          <CardView key={post.id1} style={{marginBottom:5}}>
          
          <Text 
          style={{fontSize:16,fontWeight:'bold',textAlign:'left',textShadowOffset:{width: 2, height: 2},
          textShadowRadius:6,paddingLeft:25,paddingRight:25,textShadowColor:'#585858', fontFamily:'Times New Roman'}}>{post.title}</Text>
          <Text style={{fontSize:13,paddingLeft:33,paddingRight:33}}>{post.location}</Text>
          <Text style={{fontSize:13,color:'black',paddingLeft:33,paddingRight:33,borderBottomColor:'black',borderBottomWidth:4}}>{post.Time}</Text>
          </CardView>
          
          
          </View>
          
        )
      })}
      </View>
    </View>
  )
}
 const appNavigator = createStackNavigator({
   HomeScreen:{
     screen:App,
   },
   ShopList:{
      screen:List,
   }
 })
 export default createAppContainer(appNavigator);