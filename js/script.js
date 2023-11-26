
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
                        const response = await fetch(`http://localhost:8000/product/${prodId}`);
                        console.log(response)
                          if (response) {
                            $("kateg_img").attr("src", response[0]['Image URL']);
                            $("name").text(response[0].name);
                            $("price").text(response[0].price);
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
});
