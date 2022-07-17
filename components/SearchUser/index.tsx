import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import serverAPI from 'services/api';
import { useUser } from 'services/hooks';
import styles from './SearchUser.module.css';

const SearchUser: React.FC = () => {
  const { user } = useUser();
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState<User[]>([]);

  const load = useCallback(async () => {
    try {
      if (!searchText) {
        return setSearchList([]);
      }
      const { data } = await serverAPI.get('/user/search', {
        params: {
          searchText,
        },
      });
      const result = data.filter((el: User) => el.userId !== user.userId);
      setSearchList(result);
    } catch (err) {
      console.error(err);
    }
  }, [searchText, user.userId]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <section className={styles.section}>
      <input
        type="text"
        placeholder="친구 검색"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div style={{ position: 'relative', height: 0 }}>
        <div className={styles.search_list_wrapper}>
          <div
            className={styles.search_list_inner}
            style={{
              border: searchList?.length ? '1px solid #ddd' : 'none',
            }}
          >
            {searchList.map((el) => {
              return (
                <Link
                  key={el.userId}
                  href={{
                    pathname: `message/${user.userId}-${el.userId}`,
                    query: {
                      name: el.name,
                    },
                  }}
                >
                  <a>
                    <article className={styles.article}>
                      <p>{el.name}</p>
                    </article>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchUser;
