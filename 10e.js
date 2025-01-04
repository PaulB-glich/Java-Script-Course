    function gaming() {
      let buttonElement = document.querySelector('.js-gaming-button');

       (buttonElement.innerText === 'Gaming')
        buttonElement.innerHTML = 'Gaming'
        buttonElement.classList.toggle('is-toggled');
    }
    function music() {
      let buttonElement = document.querySelector('.js-music-button');

       (buttonElement.innerText === 'Music')
        buttonElement.innerHTML = 'Music'
        buttonElement.classList.toggle('is-toggled');
    }
    function tech() {
      let buttonElement = document.querySelector('.js-tech-button');

       (buttonElement.innerText === 'Tech')
        buttonElement.innerHTML = 'Tech'
        buttonElement.classList.toggle('is-toggled');
    }