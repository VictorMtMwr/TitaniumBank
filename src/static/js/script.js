window.onload = function () {
    const claveInput = document.getElementById("clave");
    const teclado = document.getElementById("teclado");
    const loginBtn = document.getElementById("login");
    const mensaje = document.getElementById("mensaje");
    const usuarioInput = document.getElementById("usuario");

    let valoresOriginales = [];

    function mezclarTeclas() {
        const teclas = Array.from(teclado.querySelectorAll(".tecla:not(.borrar)"));
        valoresOriginales = teclas.map(tecla => tecla.dataset.valor || tecla.textContent);
        valoresOriginales.sort(() => Math.random() - 0.5); 

        teclas.forEach((tecla, index) => {
            tecla.dataset.valor = valoresOriginales[index];
            tecla.textContent = valoresOriginales[index];
        });

        if (teclado.classList.contains("oculto")) {
            ocultarTeclas();
        }
    }

    teclado.addEventListener("click", function (event) {
        if (event.target.classList.contains("tecla")) {
            if (claveInput.value.length < 4) { 
                claveInput.value += event.target.dataset.valor;
                mezclarTeclas();
            }
        } else if (event.target.classList.contains("borrar")) {
            claveInput.value = claveInput.value.slice(0, -1);
        }
    });

    function ocultarTeclas() {
        teclado.querySelectorAll(".tecla:not(.borrar)").forEach(tecla => {
            tecla.textContent = "*";
        });
        teclado.classList.add("oculto");
    }

    function mostrarTeclas() {
        teclado.querySelectorAll(".tecla:not(.borrar)").forEach(tecla => {
            tecla.textContent = tecla.dataset.valor;
        });
        teclado.classList.remove("oculto");
    }

    teclado.addEventListener("mouseenter", ocultarTeclas);
    teclado.addEventListener("mouseleave", mostrarTeclas);

    loginBtn.addEventListener("click", function () {
        const usuario = "victormtmwr";
        const clave = "1807";

        if (usuario === usuarioInput.value && clave === claveInput.value) { 
            mensaje.textContent = "Inicio de sesión exitoso!";
            mensaje.style.color = "green";
        } else {
            mensaje.textContent = "Usuario o clave incorrectos.";
            mensaje.style.color = "red";
        }
    });

    mezclarTeclas(); 
};

