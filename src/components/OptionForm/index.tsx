import { useEffect, useState } from 'react';
import {IoAddOutline} from 'react-icons/io5';
import styles from './styles.module.scss';

export function OptionForm(props) {
  const [input, setInput] = useState('');
  const [id, setId] = useState(1);

  async function handleSubmit(event) {
    event.preventDefault();

    setId(id + 1)
    props.onSubmit({
      id: id,
      text: input
    })

    setInput('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.interval}>
      <input 
        className={styles.inputInterval}
        placeholder='Add something...'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={styles.addOption} onClick={handleSubmit} type='button'>
        Add
      </button>
    </form>
  )
}