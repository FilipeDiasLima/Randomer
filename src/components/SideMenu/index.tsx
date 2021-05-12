import { useContext, useEffect, useState } from 'react';
import { animateValue } from '../../utils/numberAnimation';
import { ChoiceContext } from '../../contexts/ChoiceContext';
import styles from './styles.module.scss';

export function SideMenu() {
  const { selectOption, optionSelected } = useContext(ChoiceContext);

  // useEffect(() => {
  //   const obj = document.getElementById("value");
  //   animateValue(obj, 100, 0, 1000);
  // }, [])

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Rand</p><p>omer</p>
      </div>
      <div className={styles.buttons}>
        <button className={ optionSelected === 'randomNumber' ? styles.buttonSelected : styles.buttonUnselected } type='button' onClick={() => selectOption('randomNumber')}>
          <strong>
            <strong className={styles.randomStrong1}></strong>
            <strong className={styles.randomStrong2}></strong>
            <strong className={styles.randomStrong3}></strong>
          </strong>
          <span>Generate random number</span>
        </button>

        <button className={ optionSelected === 'randomOptions' ? styles.buttonSelected : styles.buttonUnselected } type='button' onClick={() => selectOption('randomOptions')}>
          <strong className={styles.wordCarousel}>
            <div>
            <ul className={styles.flip4}>
              <li>will be!</li>
              <li>options</li>
              <li>what the</li>
              <li>You choose</li>
            </ul>
            </div>          
          </strong>
          <span>Random options</span>
        </button>

        <button className={ optionSelected === 'oddsEvens' ? styles.buttonSelected : styles.buttonUnselected } type='button' onClick={() => selectOption('oddsEvens')}>
          {optionSelected === 'oddsEvens' ? (
            <img src="./counting-to-two-with-hand-fingers-green.svg" alt="Hand"/>
          ) : (
            <img src="./counting-to-two-with-hand-fingers.svg" alt="Hand"/>
          )}
          <span>Odds or Evens</span>
        </button>
      </div>
    </div>
  )
}