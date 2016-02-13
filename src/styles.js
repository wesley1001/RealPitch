import React from 'react-native';
let {StyleSheet} = React;

export default styles = StyleSheet.create({

  // default styles
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001848',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 100,
    color: 'white',
  },

  // Styles for cards in newsfeed
  card: {
    height: 300,
    width: 380, 
    backgroundColor: '#fcdfa9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccaa91',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    shadowRadius: 50,
    shadowColor: '#000000',
  },
  header: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    color: '#994950'
  },
  inst: {
    alignSelf: 'flex-end',
    fontSize: 15,
    color: '#994950'
  },

  // scrollview styles
  scrollView: {
    height: 300,
  },
});
