import React, { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import serverAPI from 'services/api';
import styles from './sign-in.module.css';
import { useUser } from 'services/hooks';

const SignInPage: NextPage = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const [form, setForm] = useState({
    userId: '',
    password: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await serverAPI.post('/auth/sign-in', form);
      setUser(data.user);
      router.push('/message');
    } catch (err) {
      console.error(err);
      alert('아이디 또는 비밀번호를 확인해주세요');
    }
  };

  return (
    <div className={styles.container}>
      <h3>로그인</h3>
      <div className={styles.inner}>
        <form onSubmit={onSubmit}>
          <label>아이디</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => {
              setForm({
                ...form,
                userId: e.target.value,
              });
            }}
          />
          <label>비밀번호</label>
          <input
            className={styles.input}
            type="password"
            onChange={(e) => {
              setForm({
                ...form,
                password: e.target.value,
              });
            }}
          />
          <input className={styles.button} type="submit" value={'로그인'} />
        </form>
        <Link href={'/sign-up'}>
          <a>회원가입하기</a>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
