/* Это объявление переменной, мы наши кнопку по тегу */
const button1 = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button1.addEventListener('click', function() {
	alert('Я сам тебя найду...')
})
