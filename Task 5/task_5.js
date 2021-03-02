// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.button-request');
// Ищем введенное число
const inputNode1 = document.querySelector('.input-1');
const inputNode2 = document.querySelector('.input-2');
// Данные из последнего успешно выполненного запроса
const data = localStorage.getItem('localData');
                                  
showImgs(JSON.parse(data));

  // Вешаем обработчик на кнопку для запроса, первичная проверка числа 
  btnNode.addEventListener('click', () => {
      if ((inputNode1.value < 1 || inputNode1.value > 10) && (inputNode2.value < 1 || inputNode2.value > 10)) {
        resultNode.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
      }
      else if (inputNode2.value < 1 || inputNode2.value > 10) {
        resultNode.textContent = 'Лимит вне диапазона от 1 до 10';
      }
      
      else if (inputNode1.value < 1 || inputNode1.value > 10) {
        resultNode.textContent = 'Номер страницы вне диапазона от 1 до 10';
      }
      else {
        fetch(`https://picsum.photos/v2/list?page=${inputNode1.value}&limit=${inputNode2.value}`)
        .then((response) => {
          // Объект ответа на запрос
          console.log('response', response);
          // Превращаем объект в JSON. Мы не можем его сразу прочитать,
          // надо отдать в следующий then
          const result = response.json();
          console.log('result', result);
          return result;
        })
        .then((data) => {
          // Объект результата в формате JSON
          console.log(data);
          localStorage.setItem('localData', JSON.stringify(data));
          showImgs(data);
        })
        .catch(() => { console.log('error') });
      }
      })

function showImgs(data) {
  let cards = '';
  if (data) {
      
      data.forEach(item => {
        const cardBlock = `
          <div class="card">
            <img
              src="${item.download_url}"
              class="card-image"
            />
            <p>${item.author}</p>
          </div>
        `;
        cards = cards + cardBlock;
      });
    }
       
  resultNode.innerHTML = cards;
}