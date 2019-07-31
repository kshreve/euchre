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
    const { navigation: { navigate } } = this.props;
    const { users } = this.state;

    return navigate('User', { users });
  }

  render() {
    const { users } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Played',
        dataIndex: 'gamesPlayed'
      },
      {
        title: 'Won',
        dataIndex: 'gamesWon'
      },
      {
        title: 'Win %',
        dataIndex: 'winPercent'
      },
      {
        title: 'Total Points',
        dataIndex: 'totalPoints'
      },
      {
        title: 'PPG',
        dataIndex: 'pointsPerGame'
      },
      {
        title: 'Rank',
        dataIndex: 'rank'
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
