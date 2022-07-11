import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styles from './sign-up.module.css';

const SignUpPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <h3>회원가입</h3>
      <div className={styles.inner}>
        <form>
          <label>아이디</label>
          <input className={styles.input} type="text" />
          <label>닉네임</label>
          <input className={styles.input} type="text" />
          <label>비밀번호</label>
          <input className={styles.input} type="password" />
          <label>비밀번호 확인</label>
          <input className={styles.input} type="password" />
          <input className={styles.button} type="submit" value={'가입하기'} />
        </form>
        <Link href={'/sign-in'}>
          <a>로그인하기</a>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
