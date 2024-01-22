export function getMobMenu() {
    let burgerMenuBTN = document.querySelector('.burger-menu-wrap');
    let burgerMenu = document.querySelector('.burger-menu');
    let menu = document.querySelector('.nav_box-mob');
    let navLinks = document.querySelectorAll('.nav__link');
    let body = document.querySelector('body');
    burgerMenuBTN.addEventListener('click', actionMenu);
    console.log(burgerMenuBTN)
    function actionMenu() {
        menu.classList.toggle('active')
        burgerMenu.classList.toggle('active')
        if (menu.className == "nav_box-mob active") {
            console.log(body)
            body.style.cssText = `overflow: hidden`;
        } else {
            body.style.cssText = `overflow: auto`;
        }
        //отключение мобильного меню при клике по элементу меню
        navLinks.forEach(el => {
            el.addEventListener("click", () => {
                menu.classList.remove('active')
                burgerMenu.classList.remove('active')
            })
        })
    }
}
getMobMenu()