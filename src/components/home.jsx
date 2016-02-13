import React from 'react-native';
import DefaultStyle from '../styles.js';
import NewsfeedCard from './newsfeedCard';
import Styles from '../styles';

var {
  View,
  ScrollView,
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

var Home = ({newsfeedCardData, fetchNewsfeedData}) => {
  newsfeedCardData.forEach(d => {
    d.cb = fetchNewsfeedData;
  });

  console.log(27, newsfeedCardData);

  return (
    <View style={[DefaultStyle.container, {backgroundColor: '#faf2e8'}]}>
      <ScrollView
        style={Styles.scrollView}>
        {newsfeedCardData.map((d, i) => {return createNewsfeedCards(d, i)})}
      </ScrollView>
    </View>
  );
};

export default Home
