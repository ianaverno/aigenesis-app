import { useEffect } from 'react';
import styles from '../../../styles/components/scenario-templates/DialogWindow/DialogHistoryEntry.module.css';

export default function DialogHistoryEntry(props) {
  const biome = props.from.biome;
  const borderClass = styles[biome];
  const entryType = props.entry.type;
  const entryClass = styles[entryType];

  const [message, setMessage] = useState(e);

  // useEffect(() => {

  // }, [])



  return (
    <li className={`${styles.wrapper} ${borderClass} ${entryClass}`}>
      <span dangerouslySetInnerHTML={{__html: message }} />
    </li>
  )
}