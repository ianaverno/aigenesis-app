import styles from '../../styles/components/wrappers/Logger.module.css';
import { useUser } from "../../contexts/UserContext";

export default function Logger(props) {
  const user = useUser();
  
  return (
    <div className={styles.container}>
      {props.children}

      <div className={styles.label}>
      log:<span className={styles.username}>{user.data.name}</span> 
      </div>
    </div>
  )
}