import logo from "./logo.svg";
import "./App.css";
import TextCustom, { TEXT_A, TEXT_B } from "./components/text";
import LoginPage from "./pages/auth/login/login";

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
