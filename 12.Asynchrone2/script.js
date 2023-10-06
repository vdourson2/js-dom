let btn = document.querySelector("button");
btn.addEventListener('click', () => {
    let input = document.querySelector('input');
    let select = document.querySelector('select');
    let div = document.createElement('div');
    document.body.appendChild(div);
    let resInLocalStorage = JSON.parse(localStorage.getItem(`${input.value}${select.value}`));
    
    //If ther is no name in the input,
    //log a warning
    if (input.value === ''){
        console.log('No name specified!');
    }

    //If the name with the same country is already in the local storage,
    //then take the data from there
    else if (resInLocalStorage !== null) {
        div.textContent = `${resInLocalStorage.name}, country : ${select.value}, age : ${resInLocalStorage.age}`
        input.value = '';
    }

    //If the name isn't already in the local storage or if the country is different,
    //then fech data from the API, and store them in local storage for further use
    else {
        fetch("https://api.agify.io/?name=" + input.value + "&country_id=" + select.value)
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem(`${input.value}${select.value}`, JSON.stringify(res));
                div.textContent = `${res.name}, country : ${select.value}, age : ${res.age}`
                input.value = '';
                //localStorage.clear();
            })
            .catch((e) => console.log(e))
    }
    
})