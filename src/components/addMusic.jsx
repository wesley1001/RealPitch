import React from 'react-native';
import Styles from '../styles';
import Shapes from '../shapes/cssShapes';

var {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Dimensions,
} = React;

class AddMusicLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingLayer: false,
      bottom: 10,
      right: 10,
      width: 60,
      height: 60,
      borderRadius: 30,
    };
  }

  _onPressed() {
    let dim = Dimensions.get('window');

    let newBottom = this.state.isShowingLayer ? 10 : 0;
    let newRight = this.state.isShowingLayer ? 10 : 0;
    let newHeight = this.state.isShowingLayer ? 60 : dim.height;
    let newWidth = this.state.isShowingLayer ? 60 : dim.width;
    let newBorderRadius = this.state.isShowingLayer ? 30 : null;

    LayoutAnimation.configureNext(animation.spring);
    this.setState({
      isShowingLayer: !this.state.isShowingLayer,
      bottom: newBottom,
      right: newRight,
      height: newHeight,
      width: newWidth,
      borderRadius: newBorderRadius
    })
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPressed.bind(this)} activeOpacity={255} style={[Shapes.circle, {
          position: 'absolute',
          bottom: this.state.bottom,
          right: this.state.right,
          width: this.state.width,
          height: this.state.height,
          borderRadius: this.state.borderRadius,
          backgroundColor: '#1f5080'}]}>
          <Text style={Shapes.plusSign}>+</Text>
        </TouchableOpacity>
    )
  }
}

var animation = {
  spring: {
    duration: 400,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 0.80,
    },
  },
}

export default AddMusicLayer
