let btn = document.querySelector("button");
btn.addEventListener('click', () => {
    let input = document.querySelector('input');
    let select = document.querySelector('select');
    let div = document.createElement('div');
    if (localStorage.getItem(input.value) == null) {
        fetch("https://api.agify.io/?name=" + input.value + "&country_id=" + select.value)
            .then((res) => res.json())
            .then((res) => {
                // localStorage.clear();
                localStorage.setItem(`${input.value}`, JSON.stringify(res));
                // let div = document.createElement('div');
                div.textContent = `${res.name}, country : ${select.value}, age : ${res.age}`
                document.body.appendChild(div);
                input.value = '';
            })
            .catch((e) => console.log(e))
    } 
    else {
        console.log('WIP');
    }
})