import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level} = useContext(ChallengesContext)

  
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/femonsao.png" alt="Felipe Monsão" />
      <div>
        <strong>Felipe Monsão</strong>
        <p>
          <img src="icons/level.svg" alt="lvl" />
          Level {level}</p>
      </div>
    </div>
  );

}