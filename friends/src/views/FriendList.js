import React from "react";
import { connect } from "react-redux";
import { getFriend, addFriend, updateFriend,deleteFriend } from "../action";
import Friend from "../components/Friend";

class FriendList extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  componentDidMount() {
    
    this.props.getFriend();
  }
  handleClick = id => {
    console.log("I was clicked!");
    this.props.deleteFriend(id);
  };
  changeHandle = e => {

    // console.log("Changes");
    
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandle = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
  };
  render() {
    
  

    return (
      <>
        <form onSubmit={this.submitHandle}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.changeHandle}
          />
          <input
            type="text"
            placeholder="age"
            name="age"
            value={this.state.age}
            onChange={this.changeHandle}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.changeHandle}
          />
          <button type="submit">Add friend</button>
        </form>

        {this.props.getFriend ? (
          <h3>Loading...Loading...Loading...</h3>
        ) : null}
        {this.props.friends.map(soop => (
          <Friend
            key={this.friend.id}
            friend={this.friend}
            handleClick={this.handleClick}/>
        ))}
      </>
    );
  }
}
const mapStateToProps = state => (

  {
    friends: state.friends,
    getFriend: state.getFriend,
    friendsFetched: state.friendsFetched,
    friendsSaved: state.friendsSaved,
    savingFriends: state.savingFriends,
    updateFriend: state.updateFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted
  }
);

export default connect(
  mapStateToProps,
  {
    getFriend,
    addFriend,
    deleteFriend
  }
)(FriendList);