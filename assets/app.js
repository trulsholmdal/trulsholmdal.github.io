(function(){
  'use strict';
  document.documentElement.classList.add('js');
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem('th-portfolio-theme'); } catch (e) { /* private browsing */ }
  if(saved === 'dark' || saved === 'light') root.dataset.theme = saved;
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';
  else root.dataset.theme = 'light';
  const themeBtn = document.querySelector('[data-theme-toggle]');
  function updateThemeLabel(){
    if(themeBtn) themeBtn.setAttribute('aria-label',root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    if(themeBtn) themeBtn.setAttribute('title',root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode');
  }
  updateThemeLabel();
  if(themeBtn) themeBtn.addEventListener('click',()=>{
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('th-portfolio-theme',root.dataset.theme); } catch(e){}
    updateThemeLabel();
  });
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-navigation]');
  function closeMenu(){ if(nav&&menuBtn){nav.classList.remove('is-open');menuBtn.setAttribute('aria-expanded','false');} }
  if(menuBtn&&nav){
    menuBtn.addEventListener('click',()=>{let opening=!nav.classList.contains('is-open');nav.classList.toggle('is-open',opening);menuBtn.setAttribute('aria-expanded',String(opening));});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
    window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();});
  }
  const profile = window.PORTFOLIO_PROFILE || {};
  document.querySelectorAll('[data-profile-link]').forEach(a=>{
    const key=a.getAttribute('data-profile-link');
    const url=profile[key];
    if(typeof url==='string' && /^https:\/\//i.test(url.trim())) {
      a.href=url.trim();a.hidden=false;
      a.target='_blank';a.rel='noopener noreferrer';
    } else a.hidden=true;
  });
  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
    },{rootMargin:'0px 0px -25px 0px',threshold:.05});
    revealEls.forEach(el=>observer.observe(el));
  } else revealEls.forEach(el=>el.classList.add('is-visible'));
  document.querySelectorAll('[data-year]').forEach(x=>x.textContent=String(new Date().getFullYear()));
})();
