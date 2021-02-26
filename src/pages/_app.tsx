import '../styles/global.css';
import React from 'react';

import { ChallengesProvider } from '../contexts/ChallengeContext';


function MyApp({ Component, pageProps }) {
  return (

    <Component {...pageProps} />


  )
}


export default MyApp;
