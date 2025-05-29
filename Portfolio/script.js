document.addEventListener("DOMContentLoaded",()=>{
  //Contact-Me
  document.getElementById("linkedin").addEventListener("click", () => {
    window.open(
      "https://www.linkedin.com/in/anmol-tiwari-40092a250/",
      "_blank"
    );
  });
  document.getElementById("github").addEventListener("click", () => {
    window.open("https://github.com/Anmoltiwari1/", "_blank");
  });
  document.getElementById("mail").addEventListener("click", () => {
    window.open("https://mail.google.com/mail/", "_blank");
  });





  //Resume
  document.getElementById("Resume-button").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=14egE1BJwJL99teTgU1bDURbD_sSUcKZO";
    link.download = "Anmol_Tiwari_Resume.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });





  //Skills
  document.getElementById("HTML").addEventListener("click", () => {
    window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank");
  });
  document.getElementById("CSS").addEventListener("click", () => {
    window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank");
  });
  document.getElementById("JavaScript").addEventListener("click", () => {
    window.open(
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "_blank"
    );
  });
  document.getElementById("React").addEventListener("click", () => {
    window.open(
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started",
      "_blank"
    );
  });
  document.getElementById("MongoDB").addEventListener("click", () => {
    window.open("https://www.mongodb.com/docs/", "_blank");
  });
  document.getElementById("Node").addEventListener("click", () => {
    window.open(
      "https://developer.mozilla.org/en-US/docs/Web/API/Node",
      "_blank"
    );
  });
  document.getElementById("Express").addEventListener("click", () => {
    window.open(
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction",
      "_blank"
    );
  });

  //Prjects
  document.getElementById("User").addEventListener("click", () => {
    window.open("https://v0-github-app-deployment.vercel.app/users", "_blank");
  });
  document.getElementById("Task").addEventListener("click", () => {
    window.open("https://v0-github-task-tracker-deploy.vercel.app/", "_blank");
  });
  document.getElementById("Weather").addEventListener("click", () => {
    window.open("https://lnkd.in/gZki9tnJ", "_blank");
  });


  document.getElementById("Offer").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1ZHa8l0BYxZbpU_tWxtk2B0Uq81YjNIf9";
    link.download = "OfferLetter.pdf"; // Change file name as you want
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
})

  




Offer