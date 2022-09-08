const first = document.getElementById('first')
const second = document.getElementById('second')

setInterval(() => {
    first.style.transform = "translateY(0)"
    second.style.transform = 'translateY(-100%)'
}, 5000);

setInterval(() => {
    first.style.transform = "translateY(100%)"
    second.style.transform = 'translateY(0)'
}, 8000);

const fixedNav = document.querySelector('.nav-container')

window.addEventListener('scroll', function () {
    const scrolled = window.scrollY

    if (scrolled > 40) {
        fixedNav.style.top = '3%'

    } else if (scrolled < 40) {
        fixedNav.style.top = '0'

    }

})

const section = document.querySelectorAll('section')
const navlinks = document.querySelectorAll('.navLinks li a')

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`.navLinks li a[href*=${id}]`).classList.add('active')
            })
        }
    })
}