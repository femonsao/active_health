import '../styles/global.css';
import React from 'react';

import { ChallengesProvider } from '../contexts/ChallengeContext';


function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider >
        <Component {...pageProps} />
     </ChallengesProvider>

  )
}


export default MyApp;
