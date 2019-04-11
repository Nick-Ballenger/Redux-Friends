import axios from "axios";
export const FRIEND_GOT = "FRIEND_GOT";
export const GET_FRIENDS = "GET_FRIENDS";
export const POST_FRIEND = "POST_FRIEND";
export const POSTING_FRIEND = "POSTING_FRIEND";
export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const FRIEND_UPDATED = "FRIEND_UPDATED";
export const DELETING_FRIEND = "DELETING_FRIEND";
export const FRIEND_DELETED = "FRIEND_DELETED";

const URL = "http://localhost:5000/api/friends";

export const getFriend = () => dispatch => {
  console.log("action call, GET");
  dispatch({ type: GET_FRIENDS });
  axios.get(URL).then(response => {
      console.log(response);
      dispatch({ type: FRIEND_GOT, payload: response.data });
    })
    .catch(err => err);
};

export const addFriend = newFriend => dispatch => {
  console.log("action call, POST");
  dispatch({ type: POSTING_FRIEND });
  axios.post(URL, newFriend).then(response => {
      dispatch({ type: POST_FRIEND, payload: response.data });
    })
    .catch(err => ({ err }));
};
export const updateFriend = update => dispatch =>{
    console.log("action call, PUT");
    dispatch ({type:UPDATING_FRIEND});
    axios.post(URL, update).then(response => {
        console.log("updated", response);
        dispatch({type:FRIEND_UPDATED, payload:response.data}).catch(err=>({err}))
    })
}

export const deleteFriend = id => dispatch => {
  console.log("action call, DELETE");
  dispatch({ type: DELETING_FRIEND });
  axios
    .delete(`${URL}/${id}`)
    .then(response => {
      console.log("DELETED FRIEND");
      dispatch({ type: FRIEND_DELETED, payload: response.data });
    })
    .catch(err => {
      dispatch({ err });
    });
};