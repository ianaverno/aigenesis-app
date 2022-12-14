import DialogHistoryEntry from './DialogHistory/DialogHistoryEntry';

export default function DialogHistory(props) {
  console.log({props});
  const entries = props.history.map(e => <DialogHistoryEntry entry={e} key={e.id} />);

  return(
    <ul className="history">
      {entries}
    </ul>
  )
}
