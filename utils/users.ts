import { AsyncStorage } from "react-native";

const getUsers = async () => {
  try {
    return await AsyncStorage.getItem("Users");
  } finally {

  }
};

export default getUsers;
