if(localStorage.getItem("token") == null) {
    alert("Tu precisas estar logado para acessar esta página!")
    window.location.href = "../html/signin.html"
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "../html/signin.html";
  }