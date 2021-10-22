function envoimail() {

  if (
    !(
      document.getElementById("emailAddress").value === "" ||
      document.getElementById("subject").value === ""
    )&&validMail(document.getElementById("emailAddress").value)
  ) {
    console.log(document.getElementById("emailAddress").value);
    fetch("https://memo.krissclotilde.com/envoi/mail", {
      method: "POST",
      body: JSON.stringify({
        texte: document.getElementById("subject").value,
        mail: document.getElementById("emailAddress").value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      resp.json().then((data) => {
        alert("Envoyer");
      });
    });
  } else {
    alert("Veuillez remplir tous les champs et mettre un mail valide. Merci ");
  }
}
function validMail(mail)
{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}