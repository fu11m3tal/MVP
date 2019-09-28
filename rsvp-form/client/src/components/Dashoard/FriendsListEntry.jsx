import React from 'react';

const FriendsListEntry = (props) => {
  var {name, status} = props.friend
  return (
      <a href={`#{name}`}>{name}</a>
  )
}

export default FriendsListEntry;