import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import serverAPI from 'services/api';
import styles from './sign-up.module.css';

const SignUpPage: NextPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    userId: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert('비밀번호를 확인해주세요');
    }
    try {
      await serverAPI.post('/auth/sign-up', {
        userId: form.userId,
        name: form.name,
        password: form.password,
      });
      router.push('/sign-in');
    } catch (err: any) {
      if (err.response.status === 409) {
        alert('이미 가입된 아이디 입니다.');
      }
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h3>회원가입</h3>
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
          <label>닉네임</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => {
              setForm({
                ...form,
                name: e.target.value,
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
          <label>비밀번호 확인</label>
          <input
            className={styles.input}
            type="password"
            onChange={(e) => {
              setForm({
                ...form,
                confirmPassword: e.target.value,
              });
            }}
          />
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
