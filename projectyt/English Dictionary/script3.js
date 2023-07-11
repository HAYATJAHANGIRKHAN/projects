const inputEl = document.getElementById("input")
const infoTextEl= document.getElementById("info-text")
const meaningContainerEl = document.getElementById("meaning-container")
const  titleEl = document.getElementById("title");
const  meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio")

async function fetchAPI(word){
try {   
    infoTextEl.style.display="block"
    meaningContainerEl.style.display ="none";
    infoTextEl.innerText=`Searching the meaning of "${word}"`
    
    const Url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
const result = await fetch(Url).then((res)=> res.json());
// console.log(result);
if(result.title){
    meaningContainerEl.style.display ="block";
    titleEl.innerText= word
meaningEl.innerText= "N/A jaaniya";
audioEl.style.display="none"
}else{
    infoTextEl.style.display="none";
    meaningContainerEl.style.display ="block";
    audioEl.style.display="inline-flex"
    titleEl.innerText= result[0].word
    meaningEl.innerText= result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;
}

} catch (error) {
    console.log(error);
    infoTextEl.innerText=` An Error try again `
}




    // console.log(word);


}

inputEl.addEventListener("keyup", (e)=> {
// console.log(e.target.value);
if(e.target.value && e.key === "Enter")
fetchAPI(e.target.value)
})