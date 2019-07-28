import React from 'react';
import { Text, View } from 'react-native';

import { Navigation } from '../types/navigation';
import styles from '../styles';

interface Props {
  navigation: Navigation,
}

class Record extends React.Component<Props> {
  static navigationOptions = {
    title: 'Record New',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Record New Game</Text>
      </View>
    );
  }
}

export default Record;
