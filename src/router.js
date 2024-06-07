import Home from "./pages/Home.js";

export default function router() {
  const loc = location.hash;

  if (loc === "" || loc === "#/inicio") {
    return Home();
  }
}
