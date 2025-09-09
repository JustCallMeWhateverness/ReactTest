export default function Greeter(
  { greeting, setGreeting, names }:
    { greeting: string; setGreeting: Function, names: string; }
) {
  const greetings = ['Hi', 'Hello', 'Yo', 'Greetings', 'Salutations'];
  return <>
    <p>Choose a greeting:</p>
    <p>
      {greetings.map(greet => (
        <button key={greet}
          onClick={() => setGreeting(greet)}>{greet}</button>
      ))}
    </p>
    {names
      .split(" ")
      .map(names => (
        <h1 key={names}>{greeting} {names}!</h1>
      ))}
  </>;
}