import styles from '../../styles/components/layout/Mainframe.module.css';
import Grid from './Mainframe/Grid.jsx';

export default function Mainframe() {
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <Grid/>
        
        <ScenarioRenderer />
      </div>
    </div>
  )
}