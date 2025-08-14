export async function initSearch(){
  const input = document.querySelector('#q');
  const out = document.querySelector('#results');
  if(!input || !out) return;
  const res = await fetch('/data/posts.json'); const idx = await res.json();
  const debounce = (fn, d=200)=>{let t; return (...a)=>{clearTimeout(t); t=setTimeout(()=>fn(...a),d)}};
  const render = items=>{
    out.innerHTML = items.length ? items.map(p=>`
      <li><a href="/posts/${p.slug}/"><strong>${p.title}</strong></a> — ${p.summary}</li>
    `).join('') : `<li>No results. Try broader keywords.</li>`;
  };
  render(idx.slice(0,10));
  input.addEventListener('input', debounce(e=>{
    const q = e.target.value.trim().toLowerCase();
    if(!q){render(idx.slice(0,10)); return;}
    const hits = idx.filter(p =>
      (p.title + ' ' + p.summary + ' ' + p.tags.join(' ')).toLowerCase().includes(q)
    );
    render(hits.slice(0,30));
  }, 150));
}