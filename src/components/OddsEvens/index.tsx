import { useEffect, useState } from 'react';
import {BsChevronDown} from 'react-icons/bs';
import { randomNumberFunction, imageFingers } from '../../utils/randomFunction';
import styles from './styles.module.scss';

export function OddsEvens() {
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [resultPlayer1, setResultPlayer1] = useState(0);
  const [resultPlayer2, setResultPlayer2] = useState(0);
  const [result, setResult] = useState<any | ''>('');

  function generateRandomNumber() {
    setResultPlayer1(randomNumberFunction(1/1, 5/1));
    setResultPlayer2(randomNumberFunction(1/1, 5/1));
  }

  function verifyHand() {
    if(resultPlayer1 === 1 ) {
      setImg1('/one-finger.png');
    }
    if( resultPlayer2 === 1 ) {
      setImg2('/one-finger.png');
    }
    if(resultPlayer1 === 2 ) {
      setImg1('/two-fingers.png');
    }
    if( resultPlayer2 === 2 ) {
      setImg2('/two-fingers.png');
    }
    if(resultPlayer1 === 3 ) {
      setImg1('/three-fingers.png');
    }
    if( resultPlayer2 === 3 ) {
      setImg2('/three-fingers.png');
    }
    if(resultPlayer1 === 4 ) {
      setImg1('/four-fingers.png');
    }
    if( resultPlayer2 === 4 ) {
      setImg2('/four-fingers.png');
    }
    if(resultPlayer1 === 5 ) {
      setImg1('/five-fingers.png');
    }
    if( resultPlayer2 === 5 ) {
      setImg2('/five-fingers.png');
    }
  }
  useEffect(() => {
    verifyHand();
    let sum = resultPlayer1 + resultPlayer2;

    if((sum%2)/1===0) setResult(player2);
    else setResult(player1);
  }, [resultPlayer1, resultPlayer2])

  return (
    <div className={styles.container}>
      <strong>Add names</strong>

      <div className={styles.players}>
        <div className={styles.player}>
          <span>Odd</span>
          <input type="text" value={player1} onChange={(e)=>setPlayer1(e.target.value)}/>
          {img1 ? (
            <img src={img1} alt="Fingers" />
          ) : null}
        </div>

        <div className={styles.player}>
          <span>Even</span>
          <input type="text" value={player2} onChange={(e)=>setPlayer2(e.target.value)}/>
          {img2 ? (
            <img src={img2} alt="Fingers" />
          ) : null}
        </div>
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