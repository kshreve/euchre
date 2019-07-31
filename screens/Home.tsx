import React from 'react';
import { Button, Text, View } from 'react-native';

import { Navigation } from '../types/navigation';
import styles from '../styles';
import Users from './Users';

interface Props {
  navigation: Navigation,
}

class Home extends React.Component<Props> {
  static navigationOptions = {
    title: 'Dashboard',
  };

  recordNew = () => {
    const { navigate } = this.props.navigation;

    return navigate('Record')
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <Button title="Record New Game" color="#841584" onPress={this.recordNew} />
        <Users navigation={navigation} />
      </View>
    );
  }
}

export default Home;
