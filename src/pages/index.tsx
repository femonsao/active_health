import Head from 'next/head'
import React from 'react';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownContext, CountdownProvider } from '../contexts/CountDownContext';

import style from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={style.container}>

      <Head>
        <title>Inicio | Active health</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>

        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </ CountdownProvider >
    </div>
  )
}
