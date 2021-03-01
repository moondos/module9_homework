   // Ищем ноду для вставки результата запроса
  const resultNode = document.querySelector('.result');
  // Ищем кнопку, по нажатии на которую будет запрос
  const btnNode = document.querySelector('.button-request');
  // Ищем введенное число
  const inputNode1 = document.querySelector('.input-1');
  const inputNode2 = document.querySelector('.input-2');

  // Вешаем обработчик на кнопку для запроса, первичная проверка числа 
  btnNode.addEventListener('click', () => {
      if (inputNode1.value >= 100 && inputNode1.value <= 300 && inputNode2.value >= 100 && inputNode2.value <= 300) {
        fetch(`https://picsum.photos/${inputNode1.value}/${inputNode2.value}`)
          .then((response) => {
            const imgBlock = `
              <div class="image-block">
                <img
                  src="${response.url}"
                  class="image"
                />
              </div>
              `;
            resultNode.innerHTML = imgBlock;
          })
          .catch(() => { console.log('error') });
      }
      else {
        resultNode.textContent = 'одно из чисел вне диапазона от 100 до 300';
      }
    
  })