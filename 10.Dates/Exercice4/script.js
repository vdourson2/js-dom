function display() {
    let now = new Date();
    document.querySelector(".wrapCalendar__weekday").textContent = now.toLocaleDateString('en-GB',{weekday:"short"});
    document.querySelector(".wrapCalendar__day").textContent = now.toLocaleDateString('en-GB',{day:"2-digit"});
    document.querySelector(".wrapCalendar__month").textContent = now.toLocaleDateString('en-GB',{month:"short"});
    document.querySelector(".wrapCalendar__year").textContent = now.toLocaleDateString('en-GB',{year:"numeric"});
    document.querySelector(".wrapCalendar__weekday").textContent = now.toLocaleDateString('en-GB',{weekday:"short"});
    document.querySelector(".hour__minutes").textContent = now.toLocaleTimeString('en-GB',{hour:'numeric',minute:"numeric"}) + ": ";
    document.querySelector(".hour__seconds").textContent = now.toLocaleTimeString('en-GB',{second:'2-digit'});
}
setInterval(() => display(), 1000);