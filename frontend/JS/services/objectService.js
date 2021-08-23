///Création d'une classe pour appeler l'API avec deux fonctions getObject(s) pour récupérer les objects json 
///via un fetch
export class ObjectService {
    constructor(){}
    async getObject(id){
        return (
        fetch("http://localhost:3000/api/furniture/" + id) 
        .then( data => data.json())
        .catch(error => alert(error))
        );
        
    } 
    
    async getObjects() {
        return (
            fetch("http://localhost:3000/api/furniture/")
            .then(data => data.json())
            .catch(error => alert(error))
        );
    }
}

