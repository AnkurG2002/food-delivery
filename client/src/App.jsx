import "./App.css";
import Navigation from "./navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export const url = "http://localhost:5000";  // development
export const url = "https://food-delivery-9flg.onrender.com"; // production

function App() {
  return (
    <div className="App">
      <Navigation />
      <ToastContainer />
    </div>
  );
}

export default App;
