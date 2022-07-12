import { useCallback, useLayoutEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userState } from 'services/store';
import serverAPI from 'services/api';

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);
  const getUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await serverAPI.get('/auth/me');
      setUser(data.user);
    } catch (err) {
      console.error(err);
      resetUser();
    } finally {
      setIsLoading(false);
    }
  }, [resetUser, setUser]);

  useLayoutEffect(() => {
    getUser();
  }, [getUser]);

  return {
    isLoading,
    user,
    resetUser,
    isLogin: user.userId ? true : false,
  };
};
