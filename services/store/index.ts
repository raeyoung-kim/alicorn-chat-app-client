import { atom } from 'recoil';

export const userState = atom<User>({
  key: 'userState',
  default: {
    userId: '',
    name: '',
  },
});
