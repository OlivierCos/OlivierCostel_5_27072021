export class ObjectService {
    constructor(){}
    async getObject(objectId){
        return (
        fetch("http://localhost:3000/api/furniture/" + objectId) 
        .then(function(data) {
            return data.json();
        })
        .then(function(object) {
            return object;   
        })
        .catch(function(error) {
            alert(error);
        }));
        
    } 
    
    async getObjects() {
        return (
            fetch("http://localhost:3000/api/furniture/")
            .then(function(data) {
                return data.json();
            })
            .then(function(objects) {
                return objects;
    
            })
            .catch(function(error) {
                alert(error);
            })
        );
    }
}

