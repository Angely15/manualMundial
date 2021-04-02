window.addEventListener("load", function () {
  fetch("/partidos.json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("contenido").innerHTML = data.partidos
        .map(
          (e) => `
   <tr><td> ${e.fecha}</td> <td> ${e.equipo1} </td> <td> ${e.equipo2}</td> </tr>
   `
        )
        .join("");
    });
});
