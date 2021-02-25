
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';




export function CountDown() {
  const { minutes, seconds, hasFinshed,
    isActive, startCountDown, resetCountDown } = useContext(CountdownContext);


  const [minuniteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


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
                    Iniciar um ciclo
                    <img src="icons/level.svg" alt="lvl" />
                  </p>
                </button>

              )}

          </>


        )
      }




    </div>
  )
}