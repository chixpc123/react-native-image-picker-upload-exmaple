/**
 * @author OUR_SITE_URL
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageObject: null,
      imageUrl: ''
    }
    this.__pickupImage = this.__pickupImage.bind(this);
  }

  __pickupImage() {
    /**
     * @description
     *  To show image picker and on select image, show image on image placeholder & make a object to upload on server.
     */
    alert('Action called to pickup image')
  }

  render() {
    const { imageUrl } = this.state;
    return (
      <View style={styles.container}>
        {
          imageUrl != ''
            ? <Image source={{ uri: imageUrl }} style={styles.imagePlaceholder} />
            : null
        }
        <TouchableOpacity
          style={styles.touchableButton}
          onPress={() => this.__pickupImage()}
        >
          <Text>Piack a image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  touchableButton: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10
  }
});
