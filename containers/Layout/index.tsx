import React, { useCallback, useEffect } from 'react';
import { Header } from 'components';
import { useUser } from 'services/hooks';
import { useRouter } from 'next/router';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname, push } = useRouter();
  const { isLogin, user } = useUser();

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
      default:
        return;
    }
  }, [isLogin, pathname, push]);

  useEffect(() => {
    routePush();
  }, [routePush]);

  return (
    <>
      <Header user={user} />
      {children}
    </>
  );
};

export default Layout;
