import "../styles/app.css";
import Nav from "./Nav";
import Text from "./Text";
import Image from "./Image";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className="wrapper">
        <Text />
        <Image />
      </div>
    </div>
  )
}

export default App;
