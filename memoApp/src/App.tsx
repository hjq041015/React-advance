import BottomNavi from "./components/BottomNavi.tsx";
import MemoList from "./components/MemoList.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <>
      <NavBar />
      <main
        style={{
          marginBottom: "56px",
          marginTop: "56px",
        }}
      >
        <MemoList />
      </main>

      <BottomNavi />
    </>
  );
}

export default App;
