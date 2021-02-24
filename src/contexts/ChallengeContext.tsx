import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge{
  type: 'body' | 'eye',
  description: string,
  amount: number

}


interface ChallengesContextData {
  level: number,
  curretExperience: number,
  challengeCompleted: number,
  activeChallenge: Challenge,
  experienceToNextLevel: number,
  levelUp: () => void,
  startNewChallenge: () => void,
  resetChallenge: () => void

}

interface ChallengeProviderProps {
  children: ReactNode;
}
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [curretExperience, setCurretExperience] = useState(0);
  const [challengeCompleted, setVhallengeCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1 ) * 4 , 2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge(){
    setActiveChallenge(null)
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
      experienceToNextLevel
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}

