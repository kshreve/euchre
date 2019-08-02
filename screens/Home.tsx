import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import { Navigation } from '../types/navigation';
import styles from '../styles';
import Users from './Users';
import getUsers from '../utils/users';
import { User } from '../types/user';

interface Props {
  navigation: Navigation,
}

interface State {
  users: Array<User>
}

class Home extends Component<Props, State> {
  static navigationOptions = {
    title: 'Dashboard',
  };

  state = {
    users: [],
  }

  async componentDidMount(): Promise<void> {
    let users = await getUsers();

    this.setState({
      users: JSON.parse(users) as Array<User>,
    });
  }

  recordNew = () => {
    const { navigate } = this.props.navigation;
    const { users } = this.state;

    return navigate('Record', { users })
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
