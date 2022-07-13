import React from 'react';
import { SearchUser } from 'components';
import { MessageList } from 'containers';
import { NextPage } from 'next';
import styles from './message.module.css';

const MeessagePage: NextPage = () => {
  return (
    <div className={styles.messagepage_container}>
      <div className={styles.search_user}>
        <SearchUser />
      </div>
      <div className={styles.messagepage_list}>
        <MessageList />
      </div>
    </div>
  );
};

export default MeessagePage;
