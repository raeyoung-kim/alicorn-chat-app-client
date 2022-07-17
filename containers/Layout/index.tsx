import React, { useCallback, useEffect } from 'react';
import { Header, SEO } from 'components';
import { useUser } from 'services/hooks';
import { useRouter } from 'next/router';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname, push, query } = useRouter();
  const { isLoading, isLogin, user } = useUser();

  const routePush = useCallback(() => {
    switch (pathname) {
      case '/sign-in':
        if (isLogin) {
          push('/');
        }
        break;
      case '/sign-up':
        if (isLogin) {
          push('/');
        }
        break;
      case '/message':
        if (!isLogin) {
          push('/sign-in');
        }
        break;
      case '/message/[id]':
        if (isLogin) {
          if (query.id && !query.id?.includes(user.userId)) {
            push('/');
          }
        } else {
          push('/sign-in');
        }
        break;
      default:
        return;
    }
  }, [isLogin, pathname, push, query.id, user.userId]);

  useEffect(() => {
    if (isLoading === false) {
      routePush();
    }
  }, [isLoading, routePush]);

  return (
    <>
      <SEO title={'CHAT APP'} />
      <Header user={user} />
      {children}
    </>
  );
};

export default Layout;
