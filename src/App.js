import Navbar from "./components/Navbar.js";
import router from "./router.js";

export default function App() {
  const root = document.getElementById("root");
  const route = router();

  root.innerHTML = "";

  root.appendChild(Navbar());
  root.appendChild(route);
}
