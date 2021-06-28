var item = document.querySelectorAll(".n2")

window.addEventListener("scroll", function() {
    for (var i = 0; i < item.length; i++) {

        if (window.scrollY >= 1200 && item[i].classList.contains("ob0")) {
            item[i].classList.add("popLeft")
        } else {}

        if (window.scrollY >= 1400 && item[i].classList.contains("ob1")) {
            item[i].classList.add("popRight")
        } else {}

        if (window.scrollY >= 1600 && item[i].classList.contains("ob2")) {
            item[i].classList.add("popLeft")
        } else {}

        if (window.scrollY >= 1800 && item[i].classList.contains("ob3")) {
            item[i].classList.add("popRight")
        } else {}
    }
})