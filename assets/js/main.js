/* JOYCOS homepage — language toggle, mobile nav, scroll reveal */

/* ---- language: html[lang] + CSS does the showing/hiding ---- */
function setLang(lang){
  document.documentElement.lang = lang;
  try{ localStorage.setItem('joycos-lang', lang); }catch(e){}
  document.querySelectorAll('.lang button').forEach(function(b){
    b.classList.toggle('on', b.dataset.lang === lang);
  });
}
document.querySelectorAll('.lang button').forEach(function(b){
  b.addEventListener('click', function(){ setLang(b.dataset.lang); });
});
(function(){
  var saved = null;
  try{ saved = localStorage.getItem('joycos-lang'); }catch(e){}
  setLang(saved === 'en' ? 'en' : 'ko');
})();

/* ---- mobile nav ---- */
var burger = document.querySelector('.burger');
if(burger){
  burger.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
  });
  document.querySelectorAll('.m-nav a').forEach(function(a){
    a.addEventListener('click', function(){
      document.body.classList.remove('nav-open');
    });
  });
}

/* ---- reveal on scroll ---- */
if('IntersectionObserver' in window){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('vis'); io.unobserve(en.target); }
    });
  }, {threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el){ io.observe(el); });
}else{
  document.querySelectorAll('.rv').forEach(function(el){ el.classList.add('vis'); });
}
