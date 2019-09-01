import React, {PureComponent} from 'react';
import {ImageBackground, ActivityIndicator, StyleSheet} from 'react-native';

export default class CustomImage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    const {imagePath, imgStyle = {}} = this.props;
    const {isLoading} = this.state;
    return (
      <ImageBackground
        source={{uri: imagePath}}
        style={[styles.baseImage, imgStyle]}
        onLoadStart={() => this.setState({isLoading: true})}
        onLoadEnd={() => this.setState({isLoading: false})}
        {...this.props}>
        {isLoading ? <ActivityIndicator size="small" /> : null}
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  baseImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
