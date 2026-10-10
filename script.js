function abrirLink(url) {
    window.open(url, "_blank");
}

function descargarHV() {
    window.location.href = "https://andressantiago239.github.io/CV/";
}

function volverInicio() {
    window.location.href = "index.html";
}

// Inicializar íconos de Lucide
if (window.lucide) {
    lucide.createIcons();
}