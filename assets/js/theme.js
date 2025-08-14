export function initTheme(){
  const btn = document.getElementById('theme-toggle'); if(!btn) return;
  const apply = m=>document.documentElement.dataset.theme = m;
  const stored = localStorage.getItem('theme');
  if(stored) apply(stored);
  btn.addEventListener('click', ()=>{
    const m = document.documentElement.dataset.theme === 'dark' ? 'light':'dark';
    apply(m); localStorage.setItem('theme', m);
  });
}