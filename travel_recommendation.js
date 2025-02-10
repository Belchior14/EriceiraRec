console.log("hehehe")



const valueInput = document.getElementById("valueInput")
const btnSearch = document.getElementById("getValue")
const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click" , function() {

    valueInput.value = ""
    while (recos.firstChild) {
        recos.removeChild(recos.firstChild);
    }



})

btnSearch.addEventListener("click" , function(e){
e.preventDefault();
let find = valueInput.value.toLowerCase();






const apiURL = ("travel_recommendation_api.json")

fetch(apiURL)
.then(response => {
    console.log(response)
    return response.json()
})
.then(data => {

    console.log(recos);

    while (recos.firstChild) {
        recos.removeChild(recos.firstChild);
    }

    if(find === "beach" || find === "beaches"){
        console.log(data.beaches);
        let recos = document.getElementById("recos")
        
      

        for (let i = 0 ; i<data.beaches.length ; i++){
            let h2Name = document.createElement("h2");
            h2Name.innerHTML = data.beaches[i].name;
            recos.appendChild(h2Name)

            let pDesc = document.createElement("p");
            pDesc.innerHTML = data.beaches[i].description;
            recos.appendChild(pDesc)

            let newImage = document.createElement("img");
            newImage.src = data.beaches[i].imageUrl
            recos.appendChild(newImage);
        }

    }
  
    if(find === "temples"|| find === "temple"){
        let recos = document.getElementById("recos")

        for (let i = 0 ; i<data.temples.length ; i++){
            let h2Name = document.createElement("h2");
            h2Name.innerHTML = data.temples[i].name;
            recos.appendChild(h2Name)

            let pDesc = document.createElement("p");
            pDesc.innerHTML = data.temples[i].description;
            recos.appendChild(pDesc)

            let newImage = document.createElement("img");
            newImage.src = data.temples[i].imageUrl
            recos.appendChild(newImage);
        }

    }


    if(find === "country" || find === "countries") {
        let recos = document.getElementById("recos")

        for (let i = 0 ; i<data.countries.length ;  i++){
            let h2Name = document.createElement("h2");
            h2Name.innerHTML = data.countries[i].name;
            recos.appendChild(h2Name)


        
            for (let j = 0 ; j< data.countries[j].cities.length ; j++ ){
                console.log(data.countries[i].cities[j].description);

                let divP = document.createElement("div")

                let pDesc = document.createElement("p");
                pDesc.innerHTML = data.countries[i].cities[j].description

                let nameCity = document.createElement("h2");
                nameCity.innerHTML =  data.countries[i].cities[j].name



                let newImage = document.createElement("img");
                newImage.src = data.countries[i].cities[j].imageUrl;
                recos.appendChild(newImage);



                divP.appendChild(nameCity);
                divP.appendChild(pDesc);
           
                recos.appendChild(divP);


                
            }
       
     

  
        }

    }
  
})
.catch(error => {
    console.error("error", error)
})


})
