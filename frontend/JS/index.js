function getObjects() {
    return (
        fetch("http://localhost:3000/api/furniture/")
        .then(function(data) {
            return data.json();
        })
        .then(function() {
            return ;

        })
        .catch(function(error) {
            alert(error);
        })
    );
}