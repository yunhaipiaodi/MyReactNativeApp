import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';

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

class SettingScreen extends React.Component {
    static navigationOptions={
        title:'设置页面',
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>这是设置页!</Text>
                <Button
                    title='跳转到设置页'
                    onPress = {() => this.props.navigation.navigate('Detail',{
                        itemId:86,
                        title:'详情页',
                    })}/>
            </View>
        );
    }
}

const homeStack =  StackNavigator({
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

const settingStack = StackNavigator({
    Setting:{
        screen:SettingScreen,
    },
    Detail:{
        screen:DetailScreen,
    },
});


export default TabNavigator({
    Home:{screen:homeStack},
    Setting:{screen:settingStack},
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
