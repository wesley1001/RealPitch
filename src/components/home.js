import React from 'react-native';
import DefaultStyle from '../styles.js';

var {
  Text,
  View,
  TouchableOpacity,
} = React;

export default Home = React.createClass({
  _handlePress () {
    this.props.navigator.replace({id: 'musicPlayer'});
  },

  render () {
    return (
      <View style={[DefaultStyle.container, {backgroundColor: '#001848'}]}>
        <Text style={DefaultStyle.title}>This is Home!</Text>
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <View style={{width: 10, height: 20, backgroundColor: 'white'}}>
            <Text style={DefaultStyle.title}>Go To Music Player!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});
