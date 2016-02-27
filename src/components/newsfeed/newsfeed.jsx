import React from 'react-native';
import Styles from '../../styles';
import NewsfeedCard from './newsfeedCard';
import Shapes from '../../shapes/cssShapes';
import AddMusicLayer from './addMusicLayer';

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
} = React;

var createNewsfeedCards = (d, i) => {
  return (
    <NewsfeedCard
      key={d.key || i}
      fetchNewsfeedData={d.cb}
      musicTitle={d.musicTitle}
      artist={d.artist}
      inst={d.inst}>
    </NewsfeedCard>);
};

var Newsfeed = ({newsfeedCardData, fetchNewsfeedData, addNewMusic}) => {
  newsfeedCardData.forEach(d => {
    d.cb = fetchNewsfeedData;
  });

  return (
    <View style={Styles.container}>
      <ScrollView
        style={Styles.scrollView}>
        {newsfeedCardData.map((d, i) => {return createNewsfeedCards(d, i)})}
      </ScrollView>
      <AddMusicLayer pos={{bottom: 10, right: 10}} addNewMusic={addNewMusic}/>
    </View>
  );
};

export default Newsfeed
