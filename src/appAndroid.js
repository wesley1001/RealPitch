import React from "react-native";
import Reflux from "reflux";
import Styles from "./styles";
import Actions from "./actions/actions";
import Store from "./stores/store";

import Home from './components/home';
import MusicPlayer from './components/musicPlayer';

let {
  View,
  Text,
  TouchableOpacity,
  Navigator,
} = React;

var App = React.createClass({
  mixins: [Reflux.connect(Store, "message")],

  componentDidMount() {
    Actions.updateMessage();
  },

  _renderScene (route, navigator) {
    if (route.id === 'home') {
      return <Home navigator={navigator}/>
    } else if (route.id === 'musicPlayer') {
      return <MusicPlayer navigator={navigator}/>
    }
  },

 render() {
   return (
     <Navigator
       initialRoute={{id: 'home'}}
       renderScene={this._renderScene}/>
   );
 }
});

export default App;
