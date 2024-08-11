import "../scss/App.scss";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import reasonsData from "../data/reasons.json";

function App() {
  return (
    <div>
      <Header />
      <Body reasonsData={reasonsData.reasons} />
      <Footer />
    </div>
  );
}

export default App;
