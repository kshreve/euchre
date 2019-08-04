import React from "react";
import { AsyncStorage, Button, Text, TextInput, View } from "react-native";

import { Navigation } from "../types/navigation";
import styles from "../styles";
import { User } from "../types/user";
import { createNewUser } from "../utils/userCalculator";

interface Props {
  navigation: Navigation;
  users: User[];
}

interface State {
  name: string;
}

class Users extends React.Component<Props, State> {
  static navigationOptions = {
    title: "Create New User"
  };

  state = {
    name: null
  };

  createNew = async () => {
    const {
      navigation: { navigate, getParam }
    } = this.props;
    const users = getParam("users") || [];
    const { name } = this.state;

    let id = 1;

    if (users && users.length) {
      users.map(user => {
        if (user.id > id) {
          id = user.id + 1;
        }
      });
    }

    const newUser = createNewUser({ id, name });

    await AsyncStorage.setItem("Users", JSON.stringify([...users, newUser]));

    return navigate("Users");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Create New User</Text>
        <TextInput
          placeholder={"Name"}
          style={{
            height: 40,
            width: "100%",
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
        />
        <Button
          title="Create New User"
          color="#841584"
          onPress={this.createNew}
        />
      </View>
    );
  }
}

export default Users;
