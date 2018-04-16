import React from 'react'
import {StyleSheet, View,StatusBar,Image} from 'react-native'

export default class LoadingPage extends React.Component{
    static navigationOptions = {
        header:null,            //没有顶部栏
    }

     timeoutHandler;           //延时句柄

    componentDidMount(){
        this.timeoutHandler = setTimeout(() => {
            this.props.navigation.navigate("Login");
        },2000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandler);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image
                    source={{url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523612677544&di=bac373b241dcc091f29e0bfc315a01b0&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015fd656d938a46ac7252ce6200b0f.jpg'}}
                    style={styles.homeImage}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    homeImage:{
    flex:1
}
});

