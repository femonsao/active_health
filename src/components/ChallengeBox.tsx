import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import style from '../styles/components/ChallengeBox.module.css';


export function ChallengeBox() {

  const {activeChallenge, resetChallenge} = useContext(ChallengesContext)

  return (
    <div className={style.challengeBoxContainer}>

      {
        activeChallenge ? (

          <div className={style.challengeBoxActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`}/>
              <strong>Novo desafio</strong>
              <p>
                {activeChallenge.description}
              </p>
            </main>

            <footer>
              <button 
              type='button'
              className={style.challengeFailedButton}
              onClick={resetChallenge}
              >
                Falhei
              </button>
              <button
               type='button'
               className={style.challengeSucceedeBUtton}
               >
                 Completei
                 </button>
            </footer>

          </div>
        ) : (


            <div className={style.challengeNotActive}>
              <strong>Finalize um ciclo para receber desafios</strong>
              <p>
                <img src="icons/level-up.svg" alt="level Up" />
              Avance de level completando desafios.
            </p>
            </div>

          )
      }
    </div>
  )
}