//Création d'une classe pour le fonctionnement du formulaire
export class FormService {
  constructor() {}
  //Création de la fonction pour récupérer et traiter les infos du formulaire au click de la validation de commande
  displayForm() {
    const sendFormBtn = document.querySelector(".order__button");
    sendFormBtn.addEventListener("click", (e) => {
      e.preventDefault();
      //Variable pour définir les données à récupérer dans le formulaire
      let formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
      };
      //Création de variables contenant des règles RegEx pour respecter les critères du formulaire, et d'un message d'erreur si ce n'est pas le cas
      const formError = (value) => {
        return `${value}: Les caractères rentrés dans ce champ du formulaire ne correspondent pas à un ${value}`;
      };
      const formError2 = (value) => {
        return `${value}: Les caractères rentrés dans ce champ du formulaire ne correspondent pas à une ${value}`;
      };

      const regexNameAndCity = (value) => {
        return /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/.test(value);
      };

      const regexAddress = (value) => {
        return /^[0-9]{1,4}[A-Za-z\s-]{7,40}$/.test(value);
      };

      const regexEmail = (value) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
      };

      //Validation des données du formulaire et ajout d'un message d'alerte pour montrer que le champ est valide ou non selon les RegEx

      function firstNameCheck(formData) {
        const firstNameValidation = formData.firstName;
        if (regexNameAndCity(firstNameValidation)) {
          return true;
        } 
        if (!firstNameValidation){
            alert("Veuillez remplir le champ du formulaire Prénom")
        }
        else {
          alert(formError("Prénom"));
          return false;
        }
      }

      function lastNameCheck(formData) {
        const lastNameValidation = formData.lastName;
        if (regexNameAndCity(lastNameValidation)) {
          return true;
        } 
        if (!lastNameValidation){
            alert("Veuillez remplir le champ du formulaire Nom")
        } else {
          alert(formError("Nom"));
          return false;
        }
      }

      function addressCheck(formData) {
        const addressValidation = formData.address;
        if (regexAddress(addressValidation)) {
          return true;
        } if (!addressValidation){
            alert("Veuillez remplir le champ du formulaire Adresse")
        } else {
          alert(formError2("Adresse"));
          return false;
        }
      }

      function cityCheck(formData) {
        const cityValidation = formData.city;
        if (regexNameAndCity(cityValidation)) {
          return true;
        }if (!cityValidation){
            alert("Veuillez remplir le champ du formulaire Ville")
        }
         else {
          alert(formError2("Ville"));
          return false;
        }
      }

      function emailCheck(formData) {
        const emailValidation = formData.email;
        if (regexEmail(emailValidation)) {
          return true;
        } if (!emailValidation){
            alert("Veuillez remplir le champ du formulaire Email")
        } else {
          alert(formError("Email"));
          return false;
        }
      }
      //Contrôle de la validité de chaque input du form avant envoi dans le localStorage
      if (firstNameCheck(formData) && lastNameCheck(formData) && addressCheck(formData) && cityCheck(formData) &&emailCheck(formData)) {
        //Mettre l'objet formData dans le localStorage
        localStorage.setItem("formData", JSON.stringify(formData));
      } else {
        return false;
      }
      ///Création de la fonction pour envoyer des données au service web via l'API
      function sendOrder() {
        const LOCAL_STORAGE_KEY = "object";
        let localStorageObject = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        const DataToSend = {
          products: localStorageObject.map((object) => object.id),
          contact: formData,
        };
        //Envoi des données DatatoSend au serveur grâce à la méthode POST
        fetch("http://localhost:3000/api/furniture/order", {
          method: "POST",
          body: JSON.stringify(DataToSend),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            window.location.href = "confirmation.html?orderId=" + data.orderId;
          })
          .catch(function (error) {
            alert(error);
          });
      }
      sendOrder();
    });
  }
}
