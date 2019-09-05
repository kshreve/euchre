import React, { Component } from "react";
import {
  AsyncStorage,
  Button,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View
} from "react-native";

import { NavigationPropTypes } from "../types/navigationPropTypes";
import styles from "../styles";
import { UserType } from "../types/userType";
import { calculateUserAttributes } from "../utils/userCalculator";

interface Props {
  navigation: NavigationPropTypes;
  users: UserType[];
}

interface State {
  user: UserType;
  users: UserType[];
}

class User extends Component<Props, State> {
  static navigationOptions = {
    title: "Create New User"
  };
  accessibilityLabel: any;

  constructor(props) {
    super(props);

    const {
      navigation: { getParam }
    } = props;
    const users = getParam("users") || [];
    let id = 1;

    if (users && users.length) {
      users.map(user => {
        if (user.id > id) {
          id = user.id + 1;
        }
      });
    }

    this.state = {
      user: calculateUserAttributes({ id }),
      users
    };
  }

  onChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const { user } = this.state;
    const { value } = event.nativeEvent;
    const inputName = this.accessibilityLabel;

    this.setState({ [inputName]: value });
  };

  createNew = async () => {
    const {
      navigation: { navigate }
    } = this.props;
    const { user, users } = this.state;

    await AsyncStorage.setItem("Users", JSON.stringify([...users, user]));

    return navigate("Users");
  };

  render() {
    const { user } = this.state;

    return (
      <View style={styles.container}>
        <Text>Create New User</Text>
        <TextInput
          accessibilityLabel={"name"}
          placeholder={"Name"}
          style={{
            height: 40,
            width: "100%",
            borderColor: "gray",
            borderWidth: 1
          }}
          onChange={this.onChange}
          value={user.name}
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

export default User;
