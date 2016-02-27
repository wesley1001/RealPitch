import React from 'react-native';
import Styles from '../../styles';

var {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} = React;

var c = {
  formFields: [
    {name: 'Music Title', key: 'musicTitle'},
    {name: 'Artist', key: 'artist'},
    {name: 'Instrument', key: 'instrument'},
  ],
}

class AddMusicForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      musicTitle: '',
      artist: '',
      instrument: '',
    };
  }

  submitNewMusic() {
    let data = {
      musicTitle: this.state.musicTitle,
      artist: this.state.artist,
      inst: this.state.instrument,
    }

    this.props.addNewMusic(data);
  }

  render () {
    return (
      <View style={Styles.container}>
      <Text style={s.formTitle}>Music Title</Text>
        <TextInput
          style={s.form}
          onChangeText={(text) => this.setState({musicTitle: text})}
        />
      <Text style={s.formTitle}>Artist</Text>
        <TextInput
          style={s.form}
          onChangeText={(text) => this.setState({artist: text})}
        />
      <Text style={s.formTitle}>Instrument</Text>
        <TextInput
          style={s.form}
          onChangeText={(text) => this.setState({instrument: text})}
        />
      <TouchableOpacity style={[s.button, {right: 50}]} onPress={this.props.hideForm}>
        <Text style={s.buttonTitle}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[s.button, {left: 50}]}
        onPress={this.submitNewMusic.bind(this)}>
        <Text style={s.buttonTitle}>Submit</Text>
      </TouchableOpacity>
      </View>
    );
  }
};

var s = StyleSheet.create({
  form: {
    height: 40,
    borderColor: '#b06955',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 1,
  },
  formTitle: {
    color: '#b06954',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 50,
    height: 50,
    width: 150,
    backgroundColor: '#b06954',
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default AddMusicForm;
