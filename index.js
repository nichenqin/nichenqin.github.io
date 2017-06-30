(function () {
  var resume = new Wall('#main');
  var welcomeMain = document.querySelector('.welcome__main');
  var welcomeNext = document.querySelector('.welcome__next');

  welcomeNext.addEventListener('click', function () {
    resume.nextSection()
  });

  window.onload = function () {
    setTimeout(function () {
      welcomeMain.classList.add('showcase');
      welcomeNext.classList.add('showcase');
    }, 2000)
  }
})()
