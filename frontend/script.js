
fetch("http://localhost:3000/productos")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.querySelector(".productos-grid"); 
    contenedor.innerHTML = ""; 
    data.forEach(prod => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
        <div class="circle"></div>
        <p>${prod.nombre} - ${prod.categoria}</p>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(err => console.error("Error al obtener productos:", err));


fetch("http://localhost:3000/clima") 
  .then(res => res.json())
  .then(data => {
    const climaDiv = document.getElementById("clima");
    if(climaDiv){
      climaDiv.innerHTML = `<p>Temperatura actual en ${data.ciudad}: ${data.temperatura}°C</p>`;
    }
  })
  .catch(err => console.error("Error al obtener clima:", err));
