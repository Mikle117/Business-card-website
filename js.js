/* Это объявление переменной, мы наши кнопку по тегу */
const button1 = document.querySelector('button');




        document.getElementById('button1').onclick = function() {
            window.open('https://raw.githubusercontent.com/Mikle117/Business-card-website/refs/heads/main/%D0%A0%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5%20%D0%AF%D0%B3%D0%BE%D0%B4%D0%B8%D0%BD%20%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%20%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B8%D1%87%20-%20%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9%20%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80.pdf', '_blank');
        };

const popup = document.getElementById("photoPopup");
const popupImage = document.getElementById("popupImage");

document.getElementById("openPopup1").onclick = function() {
    popupImage.src = "./Certificate.png"; // Укажите путь к первому изображению
    popup.style.display = "flex"; // Изменено на flex для центрирования
};

document.getElementById("openPopup2").onclick = function() {
    popupImage.src = "path/to/your/photo2.jpg"; // Укажите путь ко второму изображению
    popup.style.display = "flex"; // Изменено на flex для центрирования
};

document.getElementById("closePopup").onclick = function() {
    popup.style.display = "none";
};

// Закрытие окна при клике вне его содержимого или на изображении
popup.onclick = function(event) {
    if (event.target === popup || event.target === popupImage) {
        popup.style.display = "none";
    }
};