export function buildTOC(){
  const container = document.querySelector('#toc'); if(!container) return;
  const headings = [...document.querySelectorAll('main h2, main h3')];
  if(!headings.length){ container.remove(); return; }
  const list = document.createElement('ol');
  headings.forEach(h=>{
    if(!h.id) h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-');
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${h.id}">${h.textContent}</a>`;
    if(h.tagName==='H3') li.style.marginInlineStart = '.75rem';
    list.appendChild(li);
  });
  container.innerHTML = `<strong>On this page</strong>`;
  container.appendChild(list);
  const setActive = id=>{
    container.querySelectorAll('a').forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+id));
  };
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) setActive(e.target.id); });
  }, {rootMargin:'-40% 0px -55% 0px', threshold:[0,1]});
  headings.forEach(h=>obs.observe(h));
}