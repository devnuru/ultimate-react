import React from 'react'

const Message = (props) => {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice today.
    </p>
  );
}

export default Message