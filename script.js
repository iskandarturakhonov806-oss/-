// Гирифтани тугма ва элементҳои паём аз HTML
const clickBtn = document.getElementById('clickBtn');
const message = document.getElementById('message');

// Ҳодисаи зер кардани тугма
clickBtn.addEventListener('click', function() {
    message.textContent = "Ташаккур! Шумо тугмаро бомуваффақият пахш кардед! 🚀";
    message.classList.remove('hidden');
});
