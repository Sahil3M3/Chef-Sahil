import Main from "./components/Main"
import Header from "./components/Header"

function App() {
  console.log(import.meta.env.VITE_HGToken);
  

  return (
    <>
    <Header/>
    <Main/>
    </>
  )
}

export default App
