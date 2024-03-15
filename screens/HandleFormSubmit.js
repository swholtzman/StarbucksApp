// HandleFormSubmit.js
import { Auth } from 'aws-amplify';

export const handleSignUp = async ({ email, password, fName, lName }) => {
  try {

    const signUpResponse = await Auth.signUp({
      username: email, 
      password: password,
      attributes: {
        email: email, 
        given_name: fName, 
        family_name: lName,
      },
      autoSignIn: { enabled: true },
    });

    console.log("Sign up successful with userId:", signUpResponse.userSub);
    return signUpResponse;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; 
  }
};
