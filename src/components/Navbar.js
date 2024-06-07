export default function Navbar() {
  const navbar = document.createElement("header");
  navbar.innerHTML = `
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">Autos del mar</a>
                    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="usados.html">Autos Usados</a>
                            </li>
                            <li class="nav-item"></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Autos Nuevos
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="./ferrari.html">Ferrari</a></li>
                                    <li><a class="dropdown-item" href="./Lamborghini.html">Lamborghini</a></li>
                                    <li><a class="dropdown-item" href="./Porsche.html">Porsche</a></li>
                                    <li><a class="dropdown-item" href="./Audi.html">Audi</a></li>
                                    <li><a class="dropdown-item" href="./Rollsroyce.html">Rolls-Royce</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled text-white" aria-disabled="true">Compramos tus autos</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-light" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>     
        </div>`;
  return navbar;
}
