import React from "react";

const MailBox = (props) => {
  const messages = props.unreadMessages;
  return (
    <div>
      <h1>hello</h1>
      {messages.length > 0 && (
        <h2>You have {messages.length} unread messages</h2>
      )}
    </div>
  );
};

export default MailBox;
