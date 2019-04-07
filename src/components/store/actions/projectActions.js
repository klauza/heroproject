import { firestoreConnect } from "react-redux-firebase";

import { getFirebase } from "react-redux-firebase";

export const createProject = (project) =>{
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({ 
      ...project,
      authorFirstName: 'Bogdan',
      authorLastName: 'Morgenstern',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project: project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })

  }
};
