import { useAtom } from "jotai";
import { counterAtoms } from "../atoms/counterAtoms.ts";

function Home() {
  const [counter, setCounter] = useAtom(counterAtoms);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={decrement}>-</button>
      counter: {counter}
      <button onClick={increment}>+</button>
    </>
  );
}
export default Home;
