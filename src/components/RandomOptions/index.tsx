import { useEffect, useState } from 'react';
import {BsChevronDown} from 'react-icons/bs';
import { OptionForm } from '../OptionForm';
import { Options } from '../Options';
import { randomOptionFunction } from '../../utils/randomFunction';

import styles from './styles.module.scss';

export function RandomOptions() {
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState<any | ''>('');

  function addOption(option) {
    setOptions([option, ...options]);
  }

  function generateRandomNumber() {
    setResult(randomOptionFunction(options));
  }

  return (
    <div className={styles.container}>
      <strong>Add options</strong>

      <div className={styles.renderOptions}>
        <Options options={options}/>
      </div>

      <OptionForm onSubmit={addOption} />

      <button onClick={generateRandomNumber} className={styles.generateButton} type='button'>
        Generate
      </button>
      
      <BsChevronDown size={30} color='#F2F2F2' />
      <BsChevronDown size={30} color='#F2F2F2' />
      <BsChevronDown size={30} color='#F2F2F2' />

      <div className={styles.resultContainer}>
        <input className={styles.result} disabled={true} type="text" value={result.text}/>
        <button className={styles.copyButton} type='button' onClick={() => {navigator.clipboard.writeText(result.text)}} >Copy</button>
      </div>
    </div>
  )
}