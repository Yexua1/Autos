import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";

export default function router() {
  const loc = location.hash;
  const notFound = NotFound();

  if (loc === "" || loc === "#/inicio") {
    return Home();
  }

  return notFound;
}
