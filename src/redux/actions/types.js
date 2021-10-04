const actionTypes = {
  //user data related types
  loginUser: "LOGIN USER",
  loginSuccess: "LOGIN SUCCESS",
  loginFail: "LOGIN FAIL",

  //sign up related types
  registerUser: "REGISTER USER",
  registerSuccess: "REGISTER SUCCESS",
  registerFail: "REGISTER FAIL",

  getUserDetails: "GET USER DETAILS",
  getUserDetailSuccess: "GET USER DETAILS SUCCESS",
  getUserDetailsFail: "GET USER DETAILS FAIL",

  updateUserDetails: "UPDATE USER DETAILS",
  updateUserDetailSuccess: "UPDATE USER DETAILS SUCCESS",
  updateUserDetailsFail: "UPDATE USER DETAILS FAIL",

  //payment methods
  getPaymentMethods: "GET PAYMENT METHODS",
  getPaymentMethodSuccess: "GET PAYMENT METHODS SUCCESS",
  getPaymentMethodFail: "GET PAYMENT METHODS FAIL",

  //search events, artists , venues
  searching: "SEARCHING",
  searchSuccess: "SEARCH SUCCESS",
  searchFail: "SEARCH FAIL",

  //reset data in the app ui
  refreshData: "REFRESH_DATA",
};
export default actionTypes;
