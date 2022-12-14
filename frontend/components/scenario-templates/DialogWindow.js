import { useState, useEffect, useReducer } from 'react';
import initState from '../../store/state';
import styles from '../../styles/components/scenario-templates/DialogWindow/DialogWindow.module.css'

import Image from 'next/image';
import Avatar from '../wrappers/Avatar';
import DialogHistory from './DialogWindow/DialogHistory';

export const ACTIONS = {
  START: 'start',
  COMPLETE: 'complete'
}

function reducer(state, action) {
  console.log("type", action.type);
  // console.log("nodeid", action.payload.nodeId);
  // console.log("node", state.dialog.nodes[action.payload.nodeId]);
  let newState = JSON.parse(JSON.stringify(state));
  let node = state.dialog.nodes[action.payload.nodeId];

  switch (action.type) {
    case ACTIONS.START:
      console.log("action.payload.nodeId", action.payload.nodeId);
      console.log({node});
      if (node) {
        if (node.prompt) {
          newState.history.push({
            id: action.payload.nodeId,
            type: "prompt", 
            biome: state.dialog.with.data.biome,
            html: node.prompt
          })
          newState.currentNodeId = node.next_node_id;
        };
      }
      return newState;
    // case ACTIONS.COMPLETE:
    //   switch(node.input_type) {
    //     case null: 
    //       delete newState.dialog.nodes[action.payload.nodeId]
    //       newState.currentNodeId = node.next_node_id;
    //   };

    default:
      console.warn("DialogWindow action not found");
      return state;
  }
}


export default function DialogWindow(props) {
  const initDialog = JSON.parse(initState).content.dialogs[`${props.dialogId}`];
  const counterpart = initDialog.with;
  
  const [state, dispatch] = useReducer(reducer, {
    dialog: initDialog,
    currentNodeId: "",
    history: []
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.START, payload: { nodeId: "0" }})
  }, []);

  // useEffect(() => {
  //   console.log(`playing node ${state.currentNodeId}`);
  //   dispatch({type: ACTIONS.START, payload: { nodeId: state.currentNodeId}})
  //   console.log("node played");
  // }, [state.currentNodeId])

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

          <DialogHistory history={state.history} dispatch={dispatch}/>
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
