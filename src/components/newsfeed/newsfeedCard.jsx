import React from 'react-native';
import Shapes from '../../shapes/cssShapes';
import Styles from '../../styles';

var scClientId = '334ecd4221d761eec2d1e2a2984e1cf7';

var {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} = React;

var NewsfeedCard = ({musicTitle, artist, inst, fetchNewsfeedData}) => {
  let title = `${musicTitle} - ${artist}`;
  let screenWidth = Dimensions.get('window').width;
  console.log('width', screenWidth);

  return (
    <TouchableOpacity style={Styles.card} activeOpacity={255}>
      <View style={Styles.header}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.inst}>{inst}</Text>
      </View>
      <View style={Shapes.line}></View>
    </TouchableOpacity>
  );
};

NewsfeedCard.defaultProps = {
  musicTitle: 'Title',
  artist: 'artist',
  inst: 'inst',
  fetchNewsfeedData: () => {
    console.log('I WAS PRESSED!');
  },
};

export default NewsfeedCard;
