import "./App.css";
import LoginPage from "./pages/auth/login/login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <LoginPage />
      <ToastContainer />
    </div>
  );
}
export default App;
