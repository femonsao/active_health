import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge{
  type: 'body' | 'eye',
  description: string,
  amount: number

}


interface ChallengesContextData {
  level: number;
  curretExperience: number;
  challengeCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChalenge: () => void;

}

interface ChallengeProviderProps {
  children: ReactNode;
}
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [curretExperience, setCurretExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1 ) * 4 , 2);
  useEffect(() =>{

      Notification.requestPermission();

  }, [])

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted'){
      new Notification ('Novo desafio' , {
        body: `Valendo ${challenge.amount}xp!`
      });

    }
  }

  function resetChallenge(){
    setActiveChallenge(null)
  }
  function completeChalenge(){
    if(!activeChallenge){
      return;
    }
    const {amount} = activeChallenge;

    let finalExperience = curretExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }
    setCurretExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeCompleted(challengeCompleted + 1);


  }

  return (
    <ChallengesContext.Provider value={{
      level,
      curretExperience,
      challengeCompleted,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChalenge
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}

