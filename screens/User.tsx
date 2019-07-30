import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import { Navigation } from '../types/navigation';
import styles from '../styles';

interface Props {
  navigation: Navigation,
}

interface State {
  name: string,
}

class Users extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Create New User',
  };

  state = {
    name: null
  }

  createNew = () => {
    const { navigate } = this.props.navigation;

    return navigate('Users');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Create New User</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ name: text })}
          value={this.state.name}
        />
        <Button title="Create New User" color="#841584" onPress={this.createNew} />
      </View>
    );
  }
}

export default Users;
