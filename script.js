function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  console.log({ position, name, number });
  const confirmar = confirm(
    "Escalar " + name + " na posição " + position + "?"
  );
  if (confirmar) {
    const teamlist = document.getElementById("team-list");
    const player = document.createElement("li");
    player.id = "player" + number;
    player.innerText = position + ": " + name + " (" + number + " )";
    teamlist.appendChild(player);

    // Limpar os inputs
    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}
