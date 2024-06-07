export default function NotFound() {
  const notFound = document.createElement("main");
  notFound.innerHTML = `
        <div>
            <h1>No se ha encontrado la página</h1>
        </div>
        `;

  return notFound;
}
