import { SubmissionError } from "redux-form";
import { LOGIN_USER } from "./authConstants";
import { createActions } from "redux-actions";
import { closeModal } from "../modals/modalActions";
import { toastr } from "react-redux-toastr";

export const { loginUser } = createActions(LOGIN_USER);

export const login = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
    } catch (error) {
      throw new SubmissionError({ _error: error.message });
    }
    toastr.success("Login success", "welcome in my domain");
    dispatch(closeModal());
  };
};

export const registerUser = user => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
    console.log(createdUser);
    await createdUser.updateProfile({
      displayName: user.displayName
    });
    let newUser = {
      displayName: user.displayName,
      createAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${createdUser.uid}`, { ...newUser });
    dispatch(closeModal());
    toastr.success("Login success", "welcome in my domain");
  } catch (error) {
    throw new SubmissionError({ _error: error.message });
  }
};

export const socialLogin = selectedProvider => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    dispatch(closeModal());
    await firebase.login({
      provider: selectedProvider,
      type: "popup"
    });
    toastr.success("Login success", "welcome in my domain");
  } catch (error) {
    throw new SubmissionError({ _error: error.message });
  }
};
