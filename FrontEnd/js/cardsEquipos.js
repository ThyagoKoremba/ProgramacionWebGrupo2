// Espera que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3001/api/integrantes")
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById("integrantes");
            contenedor.innerHTML = "";

            for (const puesto in data) {
                const equipoSection = document.createElement("section");
                equipoSection.classList.add("equipo-section");

                const titulo = document.createElement("h3");
                titulo.textContent = puesto;
                titulo.classList.add("titulo-puesto");
                equipoSection.appendChild(titulo);

                const cardContainer = document.createElement("div");
                cardContainer.classList.add("card-container");

                data[puesto].forEach(persona => {
                    const card = document.createElement("div");
                    card.classList.add("card");

                    card.innerHTML = `
            <img src="https://i.pravatar.cc/150?u=${persona.id}" alt="avatar" class="card-img">
            <h4>${persona.nombre} ${persona.apellido}</h4>
            <p class="rol">${persona.rol}</p>
            <p class="email">${persona.email}</p>
          `;

                    cardContainer.appendChild(card);
                });

                equipoSection.appendChild(cardContainer);
                contenedor.appendChild(equipoSection);
            }
        })
        .catch(err => console.error("Error al obtener integrantes:", err));
});
