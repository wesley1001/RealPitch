'use strict';

import React from 'react-native';
import NewsfeedCard from './newsfeedCard';
import AddMusicLayer from './addMusicLayer';
import RefreshableListView from 'react-native-refreshable-listview';

var {
  View,
  ListView,
  Dimensions,
} = React;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var createNewsfeedCards = (d, i) => {
  return (
    <NewsfeedCard
      key={d.key || i}
      fetchNewsfeedData={d.cb}
      title={d.title}
      artist={d.artist}
      inst={d.instrument}>
    </NewsfeedCard>);
};

var Newsfeed = ({newsfeedCardData, fetchNewsfeedData, addNewMusic}) => {
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
