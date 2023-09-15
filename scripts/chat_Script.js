document.addEventListener("DOMContentLoaded", function () {
    const enviarMensajeButton = document.getElementById("enviarMensaje");
    const mensajeInput = document.querySelector(".chat-input textarea");
    const chatMessages = document.querySelector(".chat-messages");

    // Función para agregar un mensaje a la ventana de chat
    function agregarMensaje(mensaje) {
        const mensajeDiv = document.createElement("div");
        mensajeDiv.classList.add("message");
        mensajeDiv.innerHTML = `
            <img src="avatar.png" alt="Avatar">
            <div class="message-content">
                <p>${mensaje}</p>
            </div>
        `;
        chatMessages.appendChild(mensajeDiv);

        // Limpiar el campo de entrada de texto después de enviar el mensaje
        mensajeInput.value = "";
        // Desplazarse automáticamente hacia abajo para ver el nuevo mensaje
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Manejar el evento de clic en el botón "Enviar"
    enviarMensajeButton.addEventListener("click", function () {
        const mensaje = mensajeInput.value;
        if (mensaje.trim() !== "") {
            agregarMensaje(mensaje);
        }
    });

    // Manejar el evento de presionar Enter en el campo de entrada de texto
    mensajeInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const mensaje = mensajeInput.value;
            if (mensaje.trim() !== "") {
                agregarMensaje(mensaje);
            }
        }
    });
});
