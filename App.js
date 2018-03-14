import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions={
      title:'首页',
      headerRight:(<Button
            title='提示'
            color='#fff'
            onPress={() => alert('这是一个按钮')}/>),
  };
  render() {
    return (
      <View style={styles.container}>
          <Text>这是首页!</Text>
          <Button
            title='跳转到首页'
            onPress = {() => this.props.navigation.navigate('Detail',{
                itemId:86,
                title:'详情页',
            })}/>
      </View>
    );
  }
}

class DetailScreen extends React.Component {
    static navigationOptions=({navigation})=>{
        const {params} = navigation.state;

        return {
            title:params?params.title:'未知页面',
        }
    }
    render() {
        const {params} = this.props.navigation.state;
        const itemId = params.itemId;
        return (
            <View style={styles.container}>
                <Text>这是详情页!</Text>
                <Text>itemId:{itemId}</Text>
                <Button
                    title='返回'
                    onPress={() => this.props.navigation.goBack()}/>
            </View>
        );
    }
}

export default StackNavigator({
    Home:{
        screen:HomeScreen,
    },
    Detail:{
        screen:DetailScreen,
    },
},{
    initialRouteName:'Home',
    navigationOptions :{
        headerStyle:{
            backgroundColor:'#f4511e',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold',
        },
    },

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
