export function anchorScroll() {
    //получаем все ссылки навигации
    let links = document.querySelectorAll('._scroll');
    for (const el of links) {
        el.addEventListener("click", getScroll);
    }
    function getScroll(ev) {
        //отключаем действие по умолчанию
        ev.preventDefault();
        let anchor = ev.target.hash
        //плавный переход к якорю
        let block = document.querySelector(`${anchor}`);
        console.log(block)
        block.scrollIntoView({
            block: "start",
            behavior: 'smooth'
        });
    }
}
anchorScroll()