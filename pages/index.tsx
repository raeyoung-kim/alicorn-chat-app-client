import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div
      style={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href={'/message'}>
        <a
          style={{
            backgroundColor: '#4e61ff',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 4,
          }}
        >
          채팅방 입장
        </a>
      </Link>
    </div>
  );
};

export default Home;
