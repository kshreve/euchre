import React from "react";
import { Text, View } from "react-native";

import { NavigationPropTypes } from "../types/navigationPropTypes";
import styles from "../styles";

interface Props {
  navigation: NavigationPropTypes;
}

class Record extends React.Component<Props> {
  static navigationOptions = {
    title: "Record New Game"
  };

  componentDidMount(): void {
    const {
      navigation: { getParam }
    } = this.props;
    const users = getParam("users");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Record New Game</Text>
      </View>
    );
  }
}

export default Record;
