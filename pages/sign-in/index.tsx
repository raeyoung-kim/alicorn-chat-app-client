import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styles from './sign-in.module.css';

const SignInPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <h3>로그인</h3>
      <div className={styles.inner}>
        <form>
          <label>아이디</label>
          <input className={styles.input} type="text" />
          <label>비밀번호</label>
          <input className={styles.input} type="password" />
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
