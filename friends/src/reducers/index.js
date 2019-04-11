    
import {
    GET_FRIENDS,
    FRIEND_GOT,
    POST_FRIEND,
    POSTING_FRIEND,
    UPDATING_FRIEND,
    FRIEND_UPDATED,
    DELETING_FRIEND,
    FRIEND_DELETED 
  } from "../action";
  const initState = {
    getFriends: false,
    friendsGot: false,
    friendsSaved: false,
    savingFriends: false,
    updatedFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
  };
  
  
  export default (state = initState, action) => {
    switch (action.type) {
      case GET_FRIENDS:
        return { ...state, fetchingFriends: !state.fetchingFriends };
      case FRIEND_GOT:
        return {
          ...state,
          friends: action.payload,
          friendsFetched: !state.friendsFetched,
          fetchingFriends: !state.fetchingFriends
        };
      case POST_FRIEND:
        return { ...state, friends: action.payload };
      case POSTING_FRIEND:
        return { ...state, savingFriends: !state.addFriend };
      case UPDATING_FRIEND:
        break;
      case FRIEND_UPDATED:
        break;
      case DELETING_FRIEND:
        return { ...state, deletingFriend: !state.deleteFriend };
      case FRIEND_DELETED :
        return { ...state, friends: action.payload };
      default:
        return state;
    }
  };