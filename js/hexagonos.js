document.addEventListener("DOMContentLoaded", () => {
    const hexGrid = document.getElementById("hexGrid");
    const totalHexagons = 50;
    const hexPerRow = Math.ceil(totalHexagons / 2); // Hexágonos por fila (divididos en dos filas)

    for (let i = 0; i < 2; i++) { // Solo 2 filas
        const row = document.createElement("div");
        row.classList.add("hex-row");
        
        if (i === 0) {
            row.classList.add("first-row"); // Desplaza la primera fila ligeramente
        }

        for (let j = 0; j < hexPerRow; j++) {
            const hex = document.createElement("div");
            hex.classList.add("hex");
            row.appendChild(hex);
        }

        hexGrid.appendChild(row);
    }
    setTimeout(() => {
        document.querySelector(".loading-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000);
});
