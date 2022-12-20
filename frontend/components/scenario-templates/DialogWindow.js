import { Suspense, useEffect, useState } from 'react';
import initState from '../../store/state';
import styles from '../../styles/components/scenario-templates/DialogWindow/DialogWindow.module.css'

import Image from 'next/image';
import Avatar from '../wrappers/Avatar';
import DialogHistory from './DialogWindow/DialogHistory';
import DialogUserInterface from './DialogWindow/DialogUserInterface';
import { useUser } from '../../contexts/UserContext';

export const ACTIONS = {
  START_NODE: 'start-node',
  COMPLETE_NODE: 'complete-node'
}


export default function DialogWindow(props) {
  const user = useUser();
  const initDialog = JSON.parse(initState).content.dialogs[`${props.dialogId}`];
  const counterpart = initDialog.with;
  const nodes = initDialog.nodes;

  const [currentNode, setCurrentNode] = useState({...{...nodes}["0"], ...{id: "0"}});
  const [currentOptions, setCurrentOptions] = useState([]);
  const [history, setHistory] = useState([]);
  
  // useCallback when using fetching
  const playCurrentNode = () => {
    if (currentNode) {
      if (currentNode.prompt) {
        // console.log({currentNode});
        
        setHistory([...history, {
          id: `p-${currentNode.id}`,
          type: "prompt", 
          biome: counterpart.data.biome,
          html: currentNode.prompt
        }]);
      }
    }
  }

  // memo this
  const handleNext = () => {
    switch (currentNode.input_type) {
      case null:
        const nextId = currentNode.next_node_id;
        setCurrentNode({...{...nodes}[nextId], ...{id: nextId}})
        break
      case "options":
        setCurrentOptions([...currentNode.options])
        break
      default:
        break;
    }
  }

  const handleOptionSelect = (id) => {
    console.log("selected option", id);
  }

  useEffect(() => {
    playCurrentNode();
  }, [currentNode.id]);

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

          <DialogHistory history={history} handleNext={handleNext} />
        </div>
      </div>
      <div className={styles.l_bottom}>
        <div className={styles.user}>
          <DialogUserInterface 
            options={currentOptions} 
            handeOptionSelect={handleOptionSelect} 
          />

          <Avatar biome="desert">
            <Image 
              src={user.data.avatarSrc}
              layout='fill'
            />
          </Avatar>
        </div>
      </div>
    </div>
  )
}
