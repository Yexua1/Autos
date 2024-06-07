import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";

export default function App() {
  const root = document.getElementById("root");

  root.appendChild(Navbar());
  root.appendChild(Home());
}
