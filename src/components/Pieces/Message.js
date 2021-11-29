/* eslint-disable prettier/prettier */
import React from 'react'

const Message = ({msg, bgcolor}) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgcolor,
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  )
}

export default Message
