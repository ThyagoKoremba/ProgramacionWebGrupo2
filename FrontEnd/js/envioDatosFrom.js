document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    const respuesta = document.getElementById("respuesta");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim(); //solo letras
        const asunto = document.getElementById("asunto").value.trim(); //requerido
        const email = document.getElementById("email").value.trim(); //que tenga formato de email
        const mensaje = document.getElementById("mensaje").value.trim(); 


 // Validacion Regex FrontEnd

        const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        let errores = [];

        if(!nombreRegex.test(nombre)) errores.push("El nombre solo debe contener letras y espacios.");
        if(!asunto) errores.push("El asunto es obligatorio.");
        if(!emailRegex.test(email)) errores.push("El correo electrónico es inválido.");
        if(!mensaje) errores.push("El mensaje no puede estar vacío.");

        if(errores.length > 0) {
            respuesta.innerHTML = errores.join("<br>");
            respuesta.style.color = "red";
            return;
        }

        // Envio de Datos al BackEnd
        try {
            const res = await fetch("http://localhost:3001/api/mensajes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, email, asunto, mensaje }),
            });

            const data = await res.json();

            if(res.ok) {
                respuesta.textContent = data.message;
                respuesta.style.color = "green";
                form.reset();
            } else {
                respuesta.innerHTML = data.errors ? data.errors.join("<br>") : data.error || "Error al enviar el mensaje.";
                respuesta.style.color = "red";
            }
        } catch (err) {
            console.error(err);
            respuesta.textContent = "Error de conexión con el servidor.";
            respuesta.style.color = "red";
        }
    });
});