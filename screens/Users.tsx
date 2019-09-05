import React from "react";
import { Button, Text, View } from "react-native";
import Table from "react-native-simple-table";

import { NavigationPropTypes } from "../types/navigationPropTypes";
import styles from "../styles";
import { UserType } from "../types/userType";
import getUsers from "../utils/users";

interface Props {
  navigation: NavigationPropTypes;
}

interface State {
  users: Array<UserType>;
}

class Users extends React.Component<Props, State> {
  static navigationOptions = {
    title: "UserType List"
  };

  state = {
    users: []
  };

  async componentDidMount(): Promise<void> {
    let users = await getUsers();

    this.setState({
      users: JSON.parse(users) as Array<UserType>
    });
  }

  createNew = () => {
    const {
      navigation: { navigate }
    } = this.props;
    const { users } = this.state;

    return navigate("User", { users });
  };

  render() {
    const { users } = this.state;
    const columns = [
      {
        title: "Name",
        dataIndex: "name"
      },
      {
        title: "Played",
        dataIndex: "gamesPlayed"
      },
      {
        title: "Won",
        dataIndex: "gamesWon"
      },
      {
        title: "Win %",
        dataIndex: "winPercent"
      },
      {
        title: "Total Points",
        dataIndex: "totalPoints"
      },
      {
        title: "PPG",
        dataIndex: "pointsPerGame"
      },
      {
        title: "Rank",
        dataIndex: "rank"
      }
    ];

    return (
      <View style={styles.container}>
        <Text>Users</Text>
        <Button
          title="Create New User"
          color="#841584"
          onPress={this.createNew}
        />
        {users && users.length ? (
          <Table
            height={320}
            columnWidth={60}
            columns={columns}
            dataSource={users}
          />
        ) : null}
      </View>
    );
  }
}

export default Users;
