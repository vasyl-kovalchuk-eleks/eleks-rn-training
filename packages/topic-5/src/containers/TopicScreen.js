import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { fetchTopics } from "../actions/topics";
import { connect } from "react-redux";

// implemented without image with header
const Topic = ({topic}) => (<Card title={topic.topic}>
  {
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{uri: topic.avatar_url}}
      />
      <Text style={styles.name}>{topic.lecturer}</Text>
    </View>
  }
</Card>);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flexDirection: 'column'
  },
  listItem: {

  }
});

const mapStateToProps = (state, {navigation: { getParam }}) => ({
  topic: state.topics.items[getParam('topicId')]
});

const mapDispatchToProps = {
  fetchTopics
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
