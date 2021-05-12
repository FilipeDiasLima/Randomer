import { useEffect, useState } from 'react';
import {BsChevronDown} from 'react-icons/bs';
import { randomNumberFunction } from '../../utils/randomFunction';
import styles from './styles.module.scss';

export function RandomNumber() {
  const [min, setMin] = useState<any | 0>(0);
  const [max, setMax] = useState<any | 0>(100);
  const [result, setResult] = useState<any | 0>(0);

  useEffect(() => {
    setResult('')
  }, [min, max])

  function generateRandomNumber() {
    let res = randomNumberFunction(min/1, max/1);  
    setResult(res);
  }

  return (
    <div className={styles.container}>
      <strong>Set an interval</strong>

      <div className={styles.interval}>
        <input
          className={styles.inputInterval}
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <p>and</p>
        <input
          className={styles.inputInterval}
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>

      <button onClick={generateRandomNumber} className={styles.generateButton} type='button'>
        Generate
      </button>
      
      <BsChevronDown size={30} color='#F2F2F2' />
      <BsChevronDown size={30} color='#F2F2F2' />
      <BsChevronDown size={30} color='#F2F2F2' />

      <div className={styles.resultContainer}>
        <input className={styles.result} disabled={true} type="text" value={result}/>
        <button className={styles.copyButton} type='button' onClick={() => {navigator.clipboard.writeText(result)}} >Copy</button>
      </div>
    </div>
  )
}