import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../../../../styles/components/scenario-templates/DialogWindow/DialogHistoryEntry.module.css';

export default function DialogHistoryEntry(props) {
  const biomeClass = styles[props.entry.biome]
  const entryClass = styles[props.entry.type];
  const rootEl = useRef(null);

  const handleCommandTyped = () => {
    props.handleNext();
    rootEl.current.classList.add("Typewriter_complete")
  }

  return (
    <li ref={rootEl} className={`${styles.wrapper} ${biomeClass} ${entryClass}`}>
      <Typewriter
        options={{
          cursor: '█',
          delay: 10
        }}
        onInit={(typewriter) => {
          typewriter.typeString(props.entry.html)
          .callFunction(handleCommandTyped)
          .start();
        }}
      />
    </li>
  )
};