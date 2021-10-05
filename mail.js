function envoimail() {
  if (
    !(
      document.getElementById("emailAddress").value === "" ||
      document.getElementById("subject").value === ""
    )
  ) {
    console.log(document.getElementById("emailAddress").value);
    fetch("http://localhost:8000/envoi/mail", {
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
        alert(data.message);
      });
    });
  } else {
    alert("Veuillez remplir tous les champs");
  }
}
