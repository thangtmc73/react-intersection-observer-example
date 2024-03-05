import './App.css'
import LoadInViewportWrapper from "./LoadInViewportWrapper";
import loadable from "./loadable";
const RandomUser = loadable(() => import("./RandomUser"));

function App() {
  return (
    <div className="container">
      <div className="top">
        <h1 className="text-align-center san-serif">Scroll to End</h1>
        <div className="description text-align-center san-serif">The file chunk of the component Random User is only loaded when scrolling to the end of the page.</div>
        <p className="text-align-center san-serif"><a href="https://github.com/thangtmc73/react-intersection-observer-example">Source Code</a></p>
      </div>
      <div className="down-arrow"></div>
      <LoadInViewportWrapper>
        <RandomUser />
      </LoadInViewportWrapper>
    </div>
  )
}

export default App
