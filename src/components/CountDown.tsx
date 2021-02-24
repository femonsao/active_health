import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CountDown.module.css';

let countDownsTimeout: NodeJS.Timeout;

export function CountDown() {
  const {startNewChallenge} = useContext(ChallengesContext)


  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinshed, setHasFineshed] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuniteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown() {
    setIsActive(true);


  }
  function resetCountDown() {
    clearTimeout(countDownsTimeout);
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


  return (
    <div>
      <div className={styles.countDownCountainer}>
        <div>
          <span>{minuniteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinshed ? (

        <button
          disabled
          className={styles.countDownButton}

        >
          Ciclo encerrado
        </button>
      ) : (

          <>
            {isActive ? (

              <button
                type='button'
                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                onClick={resetCountDown}
              >
                Abandonar um ciclo
              </button>

            ) : (

                <button
                  type='button'
                  className={styles.countDownButton}
                  onClick={startCountDown}
                >
                  <p>
                    <img src="icons/level.svg" alt="lvl" />
                  Iniciar um ciclo
     </p>
                </button>

              )}

          </>


        )
      }




    </div>
  )
}