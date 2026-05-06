import { useAtom } from "jotai";
import CounterNav from "./CounterNav";
import styles from "./NavBar.module.css";
import { counterAtoms } from "../atoms/counterAtoms.ts";

function NavBar({
  setCurrentComponent,
}: {
  setCurrentComponent: (component: string) => void;
}) {
  const [counter] = useAtom(counterAtoms);
  return (
    <nav className={styles.nav}>
      <a href="#" onClick={() => setCurrentComponent("Home")}>
        Home
      </a>
      <a href="#" onClick={() => setCurrentComponent("Order")}>
        Order
      </a>
      {/* <p>Counter {counter}</p> */}
      <CounterNav counter={counter} />
    </nav>
  );
}

export default NavBar;
