import styles from '../../styles/components/layout/Mainframe.module.css';
import ScenarioRenderer from '../wrappers/ScenarioRenderer';
import Grid from './Mainframe/Grid.jsx';

// Mainframe should be refactored to a wrapper component
// scenario renderer should be passed in as child
export default function Mainframe() {
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <Grid/>

        <div className="content">
          <ScenarioRenderer />
        </div>
      </div>
    </div>
  )
}