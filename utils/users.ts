import { AsyncStorage } from "react-native";

const getUsers = async () => {
  try {
    return await AsyncStorage.getItem("User");
  } finally {

  }
};

export default getUsers;
