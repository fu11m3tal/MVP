import React from 'react';
import FriendsListEntry from './FriendsListEntry.jsx';

const FriendsList = (props) => {
  return (
    <div className="sidenavfriend">
      <div className="friendHeader">Friends</div>
      {props.friends.map((friend, index) => 
        <FriendsListEntry key={index} friend={friend}/>
      )}
    </div>
  )
}
export default FriendsList;