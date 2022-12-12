import styles from '../../styles/components/wrappers/Avatar.module.css';

export default function Avatar(props) {
  const biome = props.biome;
  const borderClass = styles[biome];

  return (
    <div className={`${styles.wrapper} ${borderClass}`}>
      {props.children}
    </div>
  )
}