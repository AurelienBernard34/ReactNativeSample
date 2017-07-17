import React, {Component} from 'react';
import {AppRegistry, Text, View, Image,  Easing, Animated, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  }
})

export default class Animation extends Component {
        
        constructor(){
            super()
            this.translateValue = new Animated.Value(0)
        }

    componentDidMount(){
        this.translate()
    }
    translate(){
        this.translateValue.setValue(0)
        Animated.timing(
            this.translateValue,
            {
                toValue:1,
                duration: 4000,
                easing: Easing.linear,
                useNativeDriver: true
            },
        ).start(() => this.translate())
    }

    render() {
        const translate = this.translateValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0,Dimensions.get('window').height, 0]
        })
    return (
      <View style={styles.container}>
          
          <Animated.Image
             style = {{
                width: 100,
                height: 80,
                transform: [{translateY: translate}]}} 
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIH2aOfA7YvTEOoD8XBcIvqngsRfbiliSexUeJSIK_3cw5N9_jQ'}}
          />
      </View>
    )
  }
}



