import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengeContext';

interface CountdonwProviderProps {
  children: ReactNode;
}

interface CountdownContextData{
  minutes: number;
  seconds: number;
  hasFinshed: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;

}

export const CountdownContext =  createContext({} as CountdownContextData)

let countDownsTimeout: NodeJS.Timeout;

export function CountdownProvider({children} :CountdonwProviderProps){
  const {startNewChallenge} = useContext(ChallengesContext)


  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinshed, setHasFineshed] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setIsActive(true);


  }
  function resetCountDown() {
    clearTimeout(countDownsTimeout);
    setHasFineshed(false);
    setIsActive(false);
    setTime(0.05 * 60);

  }


  useEffect(() => {
    if (isActive && time > 0) {
      countDownsTimeout = setTimeout(() => { setTime(time - 1) }, 1000)
    } else if (isActive && time === 0) {
      setHasFineshed(true);
      setIsActive(false);
      startNewChallenge();
    }

  }, [isActive, time]);

  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinshed,
      isActive,
      startCountDown,
      resetCountDown

    }}>

    {children}

    </CountdownContext.Provider>

  )

}