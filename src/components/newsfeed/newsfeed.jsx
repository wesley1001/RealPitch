import React from 'react-native';
import Styles from '../../styles';
import NewsfeedCard from './newsfeedCard';
import Shapes from '../../shapes/cssShapes';
import AddMusicLayer from './addMusicLayer';
import RefreshableListView from 'react-native-refreshable-listview';

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ListView,
  Dimensions,
} = React;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) // assumes immutable objects

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

var Newsfeed = ({newsfeedCardData, fetchNewsfeedData, addNewMusic, isRefreshing}) => {
  newsfeedCardData.forEach(d => {
    d.cb = fetchNewsfeedData;
  });

  let winHeight = Dimensions.get('window').height;

  return (
    <View style={{flex: 1}}>
      <RefreshableListView
        style={{height: winHeight, backgroundColor: '#faf2e8'}}
        dataSource={ds.cloneWithRows(newsfeedCardData)}
        renderRow={createNewsfeedCards}
        loadData={fetchNewsfeedData}
        refreshDescription='Refreshing'
      />
      <AddMusicLayer pos={{bottom: 10, right: 10}} addNewMusic={addNewMusic}/>
    </View>
  );
};

export default Newsfeed
