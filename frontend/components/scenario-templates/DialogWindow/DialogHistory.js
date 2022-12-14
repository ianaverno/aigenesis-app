import DialogHistoryEntry from './DialogHistory/DialogHistoryEntry';

export default function DialogHistory(props) {
  console.log(props.history);

  const entries = props.history.map((e) => {
    <DialogHistoryEntry entry={e} dispatch={props.dispatch} />
  });

  return(
    <ul className="history">
      {entries}
    </ul>
  )
}
