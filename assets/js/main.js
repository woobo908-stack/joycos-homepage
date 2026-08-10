/* JOYCOS homepage — language toggle, mobile nav, header state, scroll reveal.
   The `js` class and the saved language are applied inline in <head>, before
   first paint, so the page never flashes unstyled or in the wrong language. */

/* ---------- language ---------- */
function setLang(lang){
  document.documentElement.lang = lang;
  try{ localStorage.setItem('joycos-lang', lang); }catch(e){}
  document.querySelectorAll('.lang button').forEach(function(b){
    var on = b.dataset.lang === lang;
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}
document.querySelectorAll('.lang button').forEach(function(b){
  b.addEventListener('click', function(){ setLang(b.dataset.lang); });
});
setLang(document.documentElement.lang === 'en' ? 'en' : 'ko');

/* ---------- mobile nav ---------- */
var burger = document.querySelector('.burger');
if(burger){
  burger.setAttribute('aria-expanded', 'false');
  var toggleNav = function(open){
    document.body.classList.toggle('nav-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  };
  burger.addEventListener('click', function(){
    toggleNav(!document.body.classList.contains('nav-open'));
  });
  document.querySelectorAll('.m-nav a').forEach(function(a){
    a.addEventListener('click', function(){ toggleNav(false); });
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && document.body.classList.contains('nav-open')) toggleNav(false);
  });
}

/* ---------- header condenses once you leave the hero ---------- */
var ticking = false;
function onScroll(){
  if(ticking) return;
  ticking = true;
  requestAnimationFrame(function(){
    document.body.classList.toggle('scrolled', window.scrollY > 24);
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

/* ---------- reveal on scroll ---------- */
(function(){
  var items = Array.prototype.slice.call(document.querySelectorAll('.rv'));
  if(!items.length) return;

  /* stagger siblings inside each grid so a row breathes in rather than twitching as one block */
  document.querySelectorAll('.brand-grid, .sig-grid, .meta .wrap').forEach(function(grid){
    Array.prototype.slice.call(grid.children).forEach(function(child, i){
      if(child.classList.contains('rv')) child.style.setProperty('--d', (i * 0.09) + 's');
    });
  });

  function show(el){ el.classList.add('vis'); }

  if(!('IntersectionObserver' in window)){
    items.forEach(show);
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ show(en.target); io.unobserve(en.target); }
    });
  }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
  items.forEach(function(el){ io.observe(el); });

  /* Safety net: only rescue what is already in or above the viewport, so
     content below the fold keeps its entrance instead of being pre-revealed. */
  setTimeout(function(){
    items.forEach(function(el){
      if(el.classList.contains('vis')) return;
      if(el.getBoundingClientRect().top < window.innerHeight){ show(el); io.unobserve(el); }
    });
  }, 2000);
})();
