import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>GAGYM</title>

        <meta name="description" content="GAGYM" />
        <link rel="logo" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <img style={{ width: "20vw" }} src="/logo.png" alt="test" />
        <div className="d-flex mt-4 ms-2">
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => {
              router.push(`/home/select`);
            }}
          >
            회원/비회원
          </button>
          <button
            type="button"
            className="btn btn-outline-dark me-1 mx-1"
            onClick={() => {
              router.push(
                `http://ec2-13-125-255-75.ap-northeast-2.compute.amazonaws.com/`
              );
            }}
          >
            강사
          </button>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
