import { useState } from "react";
import Greeter from "./Greeter";
import Input from "./Input";

export default function App() {
  const [greeting, setGreeting] = useState("Hi");
  const [names, setNames] = useState("World");

  return (
    <>
      <Input {...{ names, setNames }} />{" "}

      <Greeter {...{ greeting, setGreeting, names }} />{" "}
    </>
  );
}
