document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    const respuesta = document.getElementById("respuesta");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim(); //solo letras
        const asunto = document.getElementById("asunto").value.trim(); //requerido
        const email = document.getElementById("email").value.trim(); //que tenga formato de email
        const mensaje = document.getElementById("mensaje").value.trim(); 

        //Validaciones tiene que decir que dato esta mal, con un mensaje de error para cada campo

        try {
            const res = await fetch("http://localhost:3001/api/mensajes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, email, asunto, mensaje }),
            });

            const data = await res.json();

            if (res.ok) {
                respuesta.textContent = data.message;
                respuesta.style.color = "green";
                form.reset();
            } else {
                respuesta.textContent = data.error || "Error al enviar el mensaje.";
                respuesta.style.color = "red";
            }
        } catch (err) {
            console.error(err);
            respuesta.textContent = "Error de conexión con el servidor.";
            respuesta.style.color = "red";
        }
    });
});
