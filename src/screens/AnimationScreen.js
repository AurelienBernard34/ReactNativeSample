import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';
import Animation from '../components/Animation';

export default class AnimationScreen extends Component {
    
    static navigationOptions = {
    title: 'Animation',
  };
    
    render() {
    return (

      <Animation/>
        
    );
  }
}