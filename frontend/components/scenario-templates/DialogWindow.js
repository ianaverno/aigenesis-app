import { useState, useEffect, useReducer } from 'react';
import initState from '../../store/state';
import styles from '../../styles/components/scenario-templates/DialogWindow/DialogWindow.module.css'

import Image from 'next/image';
import Avatar from '../wrappers/Avatar';
import DialogHistoryEntry from './DialogWindow/DialogHistoryEntry';

export const ACTIONS = {
  NEXT: 'next'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NEXT:
    state.scenarioPool
    default:
      return state;
  }
}


export default function DialogWindow(props) {
  const dialog = JSON.parse(initState).content.dialogs[`${props.dialogId}`];
  const counterpart = dialog.with;
  
  const [state, dispatch] = useReducer(reducer, {
    scenarioPool: dialog.scenarios,
    history: []
  });

  // const [scenarioPool, setScenarioPool] = useState(dialog.scenarios);
  // const [history, setHistory] = useState([]);
 
  function playNextNode() {
    dispatch({ type: 'next' })
  }

  useEffect(() => {
    playNextNode();
  }, []);
  

  const messages = history.map( e => <DialogHistoryEntry entry={e} />);

  function popToHistory() {
    dispatch({type: 'popToHistory'})
  };


  // console.log({dialog});

  return (
    <div className={styles.l_container}>
      <div className={styles.l_top}>
        <div className={styles.counterpart}>
          <Avatar biome={counterpart.data.biome}>
            <Image 
              src={counterpart.data.avatarSrc}
              layout='fill'
            />
          </Avatar>


          <ul className="history">
            {messages}
          </ul>
        </div>
      </div>
      <div className={styles.l_bottom}>
        <div className={styles.user}>
          <div className="inputs"></div>

          {/* <Avatar biome="desert">
            
          </Avatar> */}
        </div>
      </div>
    </div>
  )
}
