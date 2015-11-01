import React from "react-native";
import Reflux from "reflux";

import Styles from "./styles";
import Actions from "./actions/actions";
import Store from "./stores/store";

let {
  View,
  Text,
  TouchableOpacity
} = React;

export default App = React.createClass({
  mixins: [Reflux.connect(Store, "message")],

  componentDidMount() {
    Actions.updateMessage();
  },

  render() {
    return (
      <View style={Styles.appContainer}>
        <Text style={[Styles.appMessage, Styles.appSubMessage]}>
          Tap the React logo to change the message!
        </Text>

        <TouchableOpacity style={{width: 100, height: 100}}
          onPress={Actions.updateMessage}>
        </TouchableOpacity>

        <Text style={Styles.appMessage}>{this.state.message}</Text>
        <Text style={[Styles.appMessage, Styles.appSubMessage]}>
          Edit me in: src/components/app.jsx
        </Text>
      </View>
    );
  }
});
