export function sendForm2() {
    //ждем загрузки страницы
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector(".form-2");
        const printMessage = document.querySelector(".send-message-text-2");
        const boxMessage = document.querySelector(".send-message-2");
        const colorBoxMessage = document.querySelector(".send-message-wrap-2");
        //событие при отправке
        form.addEventListener("submit", formSend);
        //отправка
        async function formSend(e) {
            e.preventDefault();
            // переменная для ошибок в форме (вызывает функцию валидации)
            let error = formValidate(form);
            //если ошибок нет отправляем форму
            if (error === 0) {
                let formData = new FormData(form);
                //отправляем форму в файл send.php
                let response = await fetch('send.php', {
                    method: "POST",
                    body: formData
                });
                //если форма успешно отправлена
                if (response.ok) {
                    let result = await response.json();
                    printMessage.innerHTML = "";
                    printMessage.innerHTML = `${result.message}`;
                    boxMessage.classList.add("active");
                    colorBoxMessage.classList.add("_green-2");
                    let closeMessage = setTimeout(() => {
                        boxMessage.classList.remove("active")
                        colorBoxMessage.classList.remove("_green-2");
                    }, 5000
                    )
                    form.reset();
                    //если произошла ошибка отпраки
                } else {
                    printMessage.innerHTML = "";
                    printMessage.innerHTML = `Ошибка отправки формы`;
                    boxMessage.classList.add("active");
                    colorBoxMessage.classList.add("_red-2");
                    let closeMessage = setTimeout(() => {
                        boxMessage.classList.remove("active");
                        colorBoxMessage.classList.remove("_red-2");
                    }, 5000
                    )
                }
                //если валидация не прошла выводим ошибку
            } else {
                printMessage.innerHTML = "";
                printMessage.innerHTML = `Ошибка отправки формы`;
                boxMessage.classList.add("active");
                colorBoxMessage.classList.add("_red-2");
                let closeMessage = setTimeout(() => {
                    boxMessage.classList.remove("active");
                    colorBoxMessage.classList.remove("_red-2");
                }, 5000
                )
            }
        }
        //функция валидации
        function formValidate(form) {
            let error = 0;
            //все инпуты
            let formReq = document.querySelectorAll("._req-2");
            for (const el of formReq) {
                const input = el;
                //сбрасываем ошибки инпутов
                formRemoveError(input);
                //если инпут имейл, то запускаем проверку имейла
                if (input.classList.contains('_email-2')) {
                    if (emailTest(input)) {
                        formAddError(input)
                        error++;
                    }
                    //если инпут чекбокс
                } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                    formAddError(input);
                    error++
                    //если инпут пустой
                } else {
                    if (input.value === "") {
                        formAddError(input);
                        error++
                    }
                }
            }
            return error;

        }
        //функция добавления ошибок
        function formAddError(input) {
            // input.parentElement.classList.add("_error");
            input.classList.add("_error");
        }
        //функция снятия ошибок
        function formRemoveError(input) {
            // input.parentElement.classList.remove("_error");
            input.classList.remove("_error");
        }
        //функция проверки имейла
        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }
    })
}
sendForm2()