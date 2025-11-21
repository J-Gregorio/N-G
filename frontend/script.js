fetch("/productos")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.querySelector(".productos-grid"); 
    contenedor.innerHTML = ""; 

    data.forEach(prod => {
      const div = document.createElement("div");
      div.classList.add("producto-lista");

      div.innerHTML = `
        <img src="imagenes/${prod.imagen}" class="img-producto-lista">
        <div class="info-producto">
          <h3>${prod.nombre}</h3>
          <p>${prod.categoria}</p>
          <p class="precio">$${prod.precio}</p>
        </div>
      `;

      contenedor.appendChild(div);
    });
  })
  .catch(err => console.error("Error al obtener productos:", err));

fetch("/clima")
  .then(res => res.json())
  .then(data => {
    const climaDiv = document.getElementById("clima");
    if (climaDiv) {
      climaDiv.innerHTML = `<p>Temperatura actual en ${data.ciudad}: ${data.temperatura}°C</p>`;
    }
  })
  .catch(err => console.error("Error al obtener clima:", err));

  
