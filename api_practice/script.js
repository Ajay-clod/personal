const button = document.querySelector('#sugButton');
const text = document.querySelector('#main_text');
button.onclick = suggestion;


async function suggestion(){
    try{
    const response = await fetch('https://www.boredapi.com/api/activity');
    if(!response.ok){
        throw new Error("error");
    }
    const data = await response.json();

    text.innerText = data.activity;
}
catch(error){
    console.log(error);
}


}


