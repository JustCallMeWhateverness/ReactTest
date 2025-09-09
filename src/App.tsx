import { useState } from "react";
import Greeter from "./Greeter";

export default function App() {
  const [greeting, setGreeting] = useState("Hi");
  const [name, setName] = useState("World");

  return (
    <>
      <input value={name}
        onChange={event => setName(event.target.value)} />

      <Greeter {...{ greeting, setGreeting, name }} />{" "}
    </>
  );
}
