import AsyncStorage from "@react-native-async-storage/async-storage";

const Auth_User = "user";
// export const onSignIn = (token, id) =>
//   AsyncStorage.multiSet([[Auth_Token, token], [userId, id]], err => {
//     return err;
//   });

export const onSignIn = (user) =>
  AsyncStorage.setItem(Auth_User, JSON.stringify(user));

export const onSignup = (user) =>
  AsyncStorage.setItem(Auth_User, JSON.stringify(user));

export const onSignOut = () => AsyncStorage.removeItem("user");

//now lets create a method that checks if the user is logged in anytime
export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("user")

      .then((res) => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => reject(err));
  });
};
