/*burger*/
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger-open').classList.toggle('burger-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger-button-close').addEventListener('click', function() {
    document.querySelector('.header__burger-open').classList.toggle('burger-active')
  })
})

/*search*/
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.search-link').addEventListener('click', function() {
    document.querySelector('.form-input-search').classList.toggle('search-activ')
  })
})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.input-search-button').addEventListener('click', function() {
    document.querySelector('.form-input-search').classList.toggle('search-activ')
  })
})

/*tabs*/
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-how-we-work__link-step-btn').forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.section-how-we-work__link-step--container').forEach(function(element) {
        element.classList.remove('tab-content--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active');
    });
  });
});

