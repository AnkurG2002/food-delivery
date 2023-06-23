import "./App.css";
import Navigation from "./navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <ToastContainer />
    </div>
  );
}

export default App;
