import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../../../styles/components/scenario-templates/DialogWindow/DialogHistoryEntry.module.css';

export default function DialogHistoryEntry(props) {
  const biome = props.from.biome;
  const borderClass = styles[biome];
  const entryType = props.entry.type;
  const entryClass = styles[entryType];

  return (
    <li className={`${styles.wrapper} ${borderClass} ${entryClass}`}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(props.entry.html).start();
        }}
      />
    </li>
  )
};