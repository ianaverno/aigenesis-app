import DialogHistoryEntry from './DialogHistory/DialogHistoryEntry';
import styles from '../../../styles/components/scenario-templates/DialogWindow/DialogHistory.module.css';

export default function DialogHistory(props) {
  const entries = props.history.map((e) => {
    return(
      <DialogHistoryEntry entry={e} key={e.id} handleNext={props.handleNext} />
    )
  });

  return(
    <ul className={styles.history}>
      {entries}
    </ul>
  )
}
