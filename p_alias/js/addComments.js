let myNewComment = {
    ratings : [
        {

            "stars": 4,

            "comment": "Test de commentaire"

        },
    ]
}




const options = {
    /* method: "POST", 
    body: JSON.stringify(myNewComment), */
    headers : {
        'Content-Type': 'application/json'
    }
};

const myUrl = 'https://mockbin.com/request'
const myUrl_2 = 'https://api.github.com/repos/GameandDario/P7-restaurantSelector/contents/P7_Api/Projet/js/listRestaurants.js/'


fetch(myUrl_2, options)
  .then(function(res) {
    if (res.ok) {
      console.log(res);
      return res.json();

    }
  })
  .then(function(value) {
    let maList = atob(value.content);
    console.log(value.content);
    console.log(maList);
    console.log(JSON.stringify(maList));

  })
  .catch(function(err) {
    console.log("Erreur", err)
    });

function addComment() {
    
}

