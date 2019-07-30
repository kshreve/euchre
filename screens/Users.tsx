import React from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';
import Table from 'react-native-simple-table'

import { Navigation } from '../types/navigation';
import styles from '../styles';
import { User } from '../types/user';

interface Props {
  navigation: Navigation,
}

interface State {
  users: Array<User>
}

class Users extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'User List',
  };

  state = {
    users: [],
  }

  async componentDidMount(): Promise<void> {
    await AsyncStorage.setItem('Users', JSON.stringify([
      { name: 'kevin', gamesPlayed: 1 },
      { name: 'shelby', gamesPlayed: 2 }
    ]));
    let users = await this.getUsers();

    this.setState({
      users: JSON.parse(users) as Array<User>,
    });
  }

  getUsers = async () => {
    try {
      return await AsyncStorage.getItem('Users');
    } finally {

    }
  };

  createNew = () => {
    const { navigate } = this.props.navigation;

    return navigate('User');
  }

  render() {
    const { users } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 140
      },
      {
        title: 'Games Played',
        dataIndex: 'gamesPlayed'
      },
    ];
    return (
      <View style={styles.container}>
        <Text>Users</Text>
        <Button title="Create New User" color="#841584" onPress={this.createNew} />
        <Table height={320} columnWidth={60} columns={columns} dataSource={users} />
      </View>
    );
  }
}

export default Users;
