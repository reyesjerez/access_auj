import "../scss/App.scss";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import reasonsData from "../data/reasons.json";
import extraData from "../data/extras.json";

function App() {
  return (
    <div>
      <Header />
      <Body reasonsData={reasonsData.reasons} extraData={extraData.extras} />
      <Footer />
    </div>
  );
}

export default App;
