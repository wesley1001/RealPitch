import React from 'react-native';
import DefaultStyle from '../styles.js';

var {
  Text,
  View,
  TouchableOpacity,
} = React;

export default MusicPlayer = React.createClass({
  _handlePress () {
    this.props.navigator.replace({id: 'home'});
  },

  render () {
    return (
      <View style={[DefaultStyle.container, {backgroundColor: '#001848'}]}>
        <Text style={DefaultStyle.title}>This is Music Player!</Text>
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <View style={{width: 10, height: 20, backgroundColor: 'white'}}>
            <Text style={DefaultStyle.title}>Go To Home!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});
