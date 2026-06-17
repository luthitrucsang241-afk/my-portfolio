document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("themeToggle");

    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme","dark");
            themeToggle.textContent = "☀️";
        }
        else{
            localStorage.setItem("theme","light");
            themeToggle.textContent = "🌙";
        }

    });

    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }

        });

    });

    hiddenElements.forEach((el) => {
        observer.observe(el);
    });

});
