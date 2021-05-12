import styles from './styles.module.scss';

export function Options({ options }) {
  return options.map((option, id) => (
    <div key={id} className={styles.interval}>
      <input 
        key={option.id}
        className={styles.inputInterval}
        type="text"
        disabled={true}
        value={option.text}
      />
    </div>
  ))
}