import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const auth = admin.auth();

interface SignUpData {
  email: string;
  password: string;
  name: string;
}

interface GetUserData {
  uid: string;
}

// ✅ User Signup
export const signUpUser = functions.https.onCall(async (request) => {
  try {
    const {email, password, name} = request.data as SignUpData;
    const user = await auth.createUser({
      email,
      password,
      displayName: name,
    });
    return {success: true, uid: user.uid};
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
});

// ✅ Fetch User Data
export const getUser = functions.https.onCall(async (request) => {
  try {
    const {uid} = request.data as GetUserData;
    const user = await auth.getUser(uid);
    return {success: true, user};
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
});
