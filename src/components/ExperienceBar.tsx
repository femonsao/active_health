import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { curretExperience , experienceToNextLevel}= useContext(ChallengesContext)

  const porcentToNextLevel = Math.round(curretExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${porcentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${porcentToNextLevel}%` }}>{curretExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header >
  );

}