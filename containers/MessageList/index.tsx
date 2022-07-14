import { MessageListItem } from 'components';
import React, { useCallback, useEffect, useState } from 'react';
import serverAPI from 'services/api';
import { useUser } from 'services/hooks';

const MessageList = () => {
  const { user } = useUser();
  const [list, setList] = useState<Message[]>([]);
  const load = useCallback(async () => {
    try {
      const { data } = await serverAPI.get('/chat/list', {
        params: {
          userId: user.userId,
        },
      });
      setList(data);
    } catch (err) {
      console.error(err);
    }
  }, [user]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <section>
      {list.map((el, i) => {
        const name =
          el.senderName === user.name ? el.partnerName : el.senderName;
        return <MessageListItem key={i} data={{ ...el, name }} />;
      })}
    </section>
  );
};

export default MessageList;
