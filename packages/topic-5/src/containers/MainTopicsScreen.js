import React from 'react'
import { StackActions } from 'react-navigation'
import { Button, StyleSheet, Text, View, ActivityIndicator, Dimensions, Text } from 'react-native'
import { List, ListItem } from 'react-native-elements'

import { connect } from 'react-redux'
import firebase from 'react-native-firebase'

import { fetchTopics } from "../actions/topics";
import { showNewMessage, setNotificationData } from "../actions/notifications";
import * as routes from "../constants/navigation";
const SCREEN_WIDTH = Dimensions.get('window').width;

class MainTopicsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopics();
    this.messageListener = firebase.notifications()
      .onNotification(({body, title}) => this.props.setNotificationData({body, title}));
  }

  componentWillUnmount() {
    this.messageListener();
  }

  render() {
    const { topics, loading, onTopicPress } = this.props;
    return (
      <View style={styles.container}>
        <List containerStyle={styles.listContainer}>
          {
            topics.map((topic) => (
              <ListItem
                style={styles.listItem}
                roundAvatar
                avatar={{uri: topic.avatar_url}}
                key={topic.seq}
                title={topic.lecturer}
                onPress={() => onTopicPress(topic.seq)}
              />
            ))
          }
        </List>
        {this.props.newNotification && <Text style={{color: 'red', fontSize: 18,  }} onPress={this.props.showNewMessage}>{'You have new notification!!'}</Text>}
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

const mapStateToProps = (state) => ({
  loading: state.topics.loading,
  topics: state.topics.items,
  newNotification: state.notifications.newNotification
});

const mapDispatchToProps = (dispatch) => ({
  fetchTopics: () => dispatch(fetchTopics()),
  onTopicPress: (topicId) => {
    dispatch(StackActions.push({
      routeName: routes.TOPIC_SCREEN,
      params: {
        topicId
      }
    }))
  },
  showNewMessage: ()=> dispatch(showNewMessage()),
  setNotificationData: params => dispatch(setNotificationData(params)),

});

export default connect(mapStateToProps, mapDispatchToProps)(MainTopicsScreen)
