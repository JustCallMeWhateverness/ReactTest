export default function Input(
  { names, setNames }:
    { names: string; setNames: Function; }
) {
  return <input value={names}
    onChange={event => setNames(event.target.value)} />;
}