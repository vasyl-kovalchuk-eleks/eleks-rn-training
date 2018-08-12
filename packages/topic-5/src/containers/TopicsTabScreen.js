import React from 'react'
import { NavigationActions, StackActions } from 'react-navigation'
import { Button, StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'
import { List, ListItem } from 'react-native-elements'

import { connect } from 'react-redux'

import * as MESSAGE from "../constants/message";
import { fetchTopics } from "../actions/topics";
const SCREEN_WIDTH = Dimensions.get('window').width;

class TopicsTabScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    const { topics, loading } = this.props;
    return (<View style={styles.container}>
      {loading
        ? <ActivityIndicator size="large"/>
        : <List containerStyle={styles.listContainer}>
          {
            topics.map((topic) => (
              <ListItem
                style={styles.listItem}
                roundAvatar
                avatar={{uri: topic.avatar_url}}
                key={topic.seq}
                title={topic.lecturer}
              />
            ))
          }
        </List>
      }
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    marginBottom: 20,
    flexDirection: 'column',
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row'
  }
});

TopicsTabScreen.navigationOptions = {
  title: MESSAGE.TOPICS
};

const mapStateToProps = (state) => ({
  loading: state.topics.loading,
  topics: state.topics.items
});

const mapDispatchToProps = {
  fetchTopics
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsTabScreen)
