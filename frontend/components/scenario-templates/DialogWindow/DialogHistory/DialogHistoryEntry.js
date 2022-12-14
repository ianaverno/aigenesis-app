import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../../../../styles/components/scenario-templates/DialogWindow/DialogHistoryEntry.module.css';
import { ACTIONS } from '../../DialogWindow';

export default function DialogHistoryEntry({entry, dispatch}) {
  const biome = entry.biome;
  const entryType = entry.type;
  const entryClass = styles[entryType];

  function handleCompleteAnimation() {
    // console.log("entry.id", entry.id);
    // dispatch({ type: ACTIONS.COMPLETE, payload: { nodeId: entry.id }})
  }

  return (
    <li className={`${styles.wrapper} ${biome} ${entryClass}`}>
      <Typewriter
        options={{
          cursor: '█'
        }}
        onInit={(typewriter) => {
          typewriter.typeString(entry.html)
          // .callFunction(handleCompleteAnimation)
          .start();
        }}
      />
    </li>
  )
};