import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../../../../styles/components/scenario-templates/DialogWindow/DialogHistoryEntry.module.css';

export default function DialogHistoryEntry(props) {
  const biome = props.entry.biome;
  const entryType = props.entry.type;

  const entryClass = styles[entryType];

  function emitCommandTyped() {
    console.log("Command typed");
  }

  return (
    <li className={`${styles.wrapper} ${biome} ${entryClass}`}>
      <Typewriter
        options={{
          cursor: '█'
        }}
        onInit={(typewriter) => {
          typewriter.cursor = '█';
          typewriter.typeString(props.entry.html)
          .callFunction(emitCommandTyped)
          .start();
        }}
      />
    </li>
  )
};