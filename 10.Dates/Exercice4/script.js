let display12 = 0;
document.querySelector(".hour__hours").addEventListener('click',(e) => {
    display12 = (display12 == 0) ? 1 : 0;
})

function display() {
    let now = new Date();
    document.querySelector(".wrapCalendar__weekday").textContent = now.toLocaleDateString('en-GB',{weekday:"short"});
    document.querySelector(".wrapCalendar__day").textContent = now.toLocaleDateString('en-GB',{day:"2-digit"});
    document.querySelector(".wrapCalendar__month").textContent = now.toLocaleDateString('en-GB',{month:"short"});
    document.querySelector(".wrapCalendar__year").textContent = now.toLocaleDateString('en-GB',{year:"numeric"});
    document.querySelector(".wrapCalendar__weekday").textContent = now.toLocaleDateString('en-GB',{weekday:"short"});
    document.querySelector(".hour__minutes").textContent = now.toLocaleTimeString('en-GB',{minute:"numeric"}) + ": ";
    document.querySelector(".hour__seconds").textContent = now.toLocaleTimeString('en-GB',{second:'2-digit'});
    if (display12 == 1) {
        document.querySelector(".hour__hours").textContent = (now.toLocaleTimeString('en-GB',{hour:'numeric',hour12:'true'})).split(" ")[0] + ": ";
    } else {
        document.querySelector(".hour__hours").textContent = now.toLocaleTimeString('en-GB',{hour:'numeric'}) + ": ";
    }    
}
setInterval(() => display(), 1000);
