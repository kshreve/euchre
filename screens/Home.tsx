import React from 'react';
import { Button, Text, View } from 'react-native';

import { Navigation } from '../types/navigation';
import styles from '../styles';

interface Props {
  navigation: Navigation,
}

class Home extends React.Component<Props> {
  static navigationOptions = {
    title: 'Dashboard',
  };

  recordNew = () => {
    const { navigate } = this.props.navigation;

    return navigate('Profile', { name: 'Jane' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <Button title="Record New" color="#841584" onPress={this.recordNew} />
      </View>
    );
  }
}

export default Home;
