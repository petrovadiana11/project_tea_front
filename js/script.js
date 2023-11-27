
document.addEventListener("DOMContentLoaded", function () {
    let burger = document.querySelector('#menu')
    burger.addEventListener('click', function () {
        let sitebarxs = document.querySelector('#menu_kategory')
        if (sitebarxs.style.display !== 'none') {
            sitebarxs.style.display = "none"
        } else {
            sitebarxs.style.display = "block"
        }
    })//работа кнопки меню

    fetch('http://localhost:8000/category/kateg')
        .then(response => response.json())
        .then(categories => {
            const categoriesContainer = document.getElementById('menu_kategory');

            categories.forEach(category => {

                const kategUl = document.createElement('ul');
                kategUl.classList.add('ul');

                const kategLi = document.createElement('li');
                kategLi.classList.add('li');
                
                const p = document.createElement('a');
                p.textContent = category.name;

                kategLi.appendChild(p);
                kategUl.appendChild(kategLi)
                categoriesContainer.appendChild(kategUl);
                p.addEventListener('click', async function(){
                    window.location.href='kategory.html'
                    try {
                      const response = await fetch(`http://localhost:8000/product/${category.prodId}`);
                      console.log(response);
                      if (response.ok) {
                          const data = await response.json();
                          document.getElementById('kateg_img').src = data[0]['Image URL'];
                          document.getElementById('name').textContent = data[0].name;
                          document.getElementById('price').textContent = data[0].price;
                      } else {
                          console.error('Ошибка');
                      }
                  } catch (error) {
                      console.error('Ошибка', error);
                  }
                    });
                    
            });
        })
        .catch(error => console.error('Ошибка:', error));
});//вывод категорий из бд и просмотр продуктов
