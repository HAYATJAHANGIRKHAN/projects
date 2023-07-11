const btnEl= document.getElementById("btn")
const jokeEl= document.getElementById("joke")
const apikey="tdQnIexZexADeTSR0IYSyg==twfFu8jAQqtV8qQ8";
const options ={
    method:"GET",
    headers:{
  "X-Api-Key":apikey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try { jokeEl.innerText= "Updating...";
    btnEl.disabled= true;
    btnEl.innerText="loading..."
    // console.log("clicked");
     const response = await fetch(apiURL,options)
    const data= await response.json()
    btnEl.disabled= false;
    btnEl.innerText="Tell me joke"
    console.log(data[0].joke);

    jokeEl.innerText= data[0].joke;
        
    } catch (error) {
        jokeEl.innerText= "An error happened, try again later";
        btnEl.innerText="Tell me joke"
        console.log(data[0].joke);

        console.log(error);
        
    }

   
}
btnEl.addEventListener("click",getJoke)