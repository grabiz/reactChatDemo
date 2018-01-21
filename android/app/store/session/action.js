import firebase from "../../services/firebase";

export const restoreSession = () => {
    return (dispatch) => {
        dispatch(sessionRestoring());

        let unsubscribe = firebaseService.auth()
        .onAuthStateChanged( user => {
            if(user) {
                dispatch(sessionSuccess(user));
                unsubscribe();
            } else {
                dispatch(sessionLogout());
                unsubscribe();
            }
        });
    }
}