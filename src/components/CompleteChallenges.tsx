import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompleteChallenges.module.css';

export function CompleteChallenges() {
  const { challengeCompleted } = useContext(ChallengesContext)
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengeCompleted}</span>
    </div>
  )
}