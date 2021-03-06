import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const UPDATED = "UPDATED";
export const UPDATING = "UPDATING";
export const DELETED = "DELETED";
export const DELETING = "DELETING";
export const EDITED = "EDITED";
export const EDITING = "EDITING";

export const friendFetcher = ( ) => {
  return function(dispatch) {
    dispatch({ type: FETCHING });

    axios
      .get("http://localhost:5000/api/friends")
      .then(data => {
        dispatch({ type: FETCHED, payload: data.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, error: err });
      });
    };
};

export const friendUpdater = (props) => {
    return function(dispatch) {
        dispatch({ type: UPDATING });

    const newFriend= {
        name: props.name,
        age: props.age,
        email: props.email,
    }
    axios
      .post("http://localhost:5000/api/friends", newFriend)
      .then(data => {
        dispatch({ type: UPDATED, payload: data.data });
    });
  };
};


export const friendDeleter = (id) => {
    return function(dispatch) {
        dispatch({ type: DELETING });

    axios
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(data => {
        dispatch({ type: DELETED, payload: data.data });
    });
  };
};

export const friendEditer = (id, editedFriend) => {
    return function(dispatch) {
        dispatch({ type: EDITING });

    axios
      .put(`http://localhost:5000/api/friends/${id}`, editedFriend)
      .then(data => {
        dispatch({ type: EDITED, payload: data.data });
    });
  };
};

