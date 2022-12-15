import { useEffect, useReducer } from 'react';
import initState from '../../store/state';
import styles from '../../styles/components/scenario-templates/DialogWindow/DialogWindow.module.css'

import Image from 'next/image';
import Avatar from '../wrappers/Avatar';
import DialogHistory from './DialogWindow/DialogHistory';

export const ACTIONS = {
  INIT_DIALOG: 'init-dialog',
  START_NODE: 'start-node',
  COMPLETE_NODE: 'complete-node'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START_NODE:
      console.log({action});

      let node = state._dialog[action.payload.nodeId];
      
      if (node) {
        let newState = {...state, 
          currentNode: {...node},
        };


        if (newState.currentNode.prompt) {
          newState.history = [...newState.history, {
            id: `p-${action.payload.nodeId}`,
            type: "prompt", 
            biome: state._counterpart.data.biome,
            html: node.prompt
          }]

          // delete newState.currentNode.prompt;
        }; 


        return newState;
      } else {
        console.error("Dialogue node missing");

        return state;
      }
    default:
      console.warn("DialogWindow action not found");
      return state;
  }
}


export default function DialogWindow(props) {
  const initDialog = JSON.parse(initState).content.dialogs[`${props.dialogId}`];

  const [state, dispatch] = useReducer(reducer, {
    _counterpart: initDialog.with,
    _dialog: initDialog.nodes,
    currentNode: {},
    currentOptions: [],
    history: []
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.START_NODE, payload: { nodeId: "0" }})
    console.log("mounted");

    return () => {console.log("unmounted")}
  }, []);

  // useEffect(() => {
  //   console.log(`playing node ${state.currentNodeId}`);
  //   dispatch({type: ACTIONS.PLAY, payload: { nodeId: state.currentNodeId}})
  //   console.log("node played");
  // }, [state.currentNodeId])

  return (
    <div className={styles.l_container}>
      <div className={styles.l_top}>
        <div className={styles.counterpart}>
          <Avatar biome={state._counterpart.data.biome}>
            <Image 
              src={state._counterpart.data.avatarSrc}
              layout='fill'
            />
          </Avatar>

          <DialogHistory history={state.history} />
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
