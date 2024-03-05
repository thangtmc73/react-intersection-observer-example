import './App.css'
import LoadInViewportWrapper from "./LoadInViewportWrapper";
import loadable from "./loadable";
const RandomUser = loadable(() => import("./RandomUser"));

function App() {
  return (
    <div className="container">
      <div className="top">
        <h1>Scroll to End</h1>
      </div>
      <div className="down-arrow"></div>
      <LoadInViewportWrapper>
        <RandomUser />
      </LoadInViewportWrapper>
    </div>
  )
}

export default App
