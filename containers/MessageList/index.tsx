import { MessageListItem } from 'components';
import React from 'react';

const MessageList = () => {
  return (
    <section>
      {[...Array(50)].map((el, i) => {
        return <MessageListItem key={i} />;
      })}
    </section>
  );
};

export default MessageList;
