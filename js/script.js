
document.addEventListener("DOMContentLoaded", function () {
    let burger = document.querySelector('#menu')
    burger.addEventListener('click', function () {
        let sitebarxs = document.querySelector('#menu_kategory')
        if (sitebarxs.style.display !== 'none') {
            sitebarxs.style.display = "none"
        } else {
            sitebarxs.style.display = "block"
        }
    })

    fetch('http://localhost:8000/category/kateg')
        .then(response => response.json())
        .then(categories => {
            const categoriesContainer = document.getElementById('categoriesContainer');

            categories.forEach(category => {

                const kategBlock = document.createElement('div');
                kategBlock.classList.add('kateg_block');

                const kategImg = document.createElement('div');
                kategImg.classList.add('kateg_img');

                const img = document.createElement('img');
                img.src = '';

                kategImg.appendChild(img);

                const kategText = document.createElement('div');
                kategText.classList.add('kateg_text');

                const p = document.createElement('p');
                p.textContent = category.name;

                kategText.appendChild(p);

                kategBlock.appendChild(kategImg);
                kategBlock.appendChild(kategText);

                categoriesContainer.appendChild(kategBlock);
            });
        })
        .catch(error => console.error('Ошибка:', error));
});

