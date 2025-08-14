export function enableCopy(){
  document.querySelectorAll('pre').forEach(pre=>{
    const btn = pre.querySelector('.copy-btn'); if(!btn) return;
    btn.addEventListener('click', async ()=>{
      const code = pre.querySelector('code')?.innerText ?? '';
      try{ await navigator.clipboard.writeText(code); btn.textContent='Copied'; setTimeout(()=>btn.textContent='Copy',1200); }
      catch{ btn.textContent='Failed'; setTimeout(()=>btn.textContent='Copy',1200); }
    });
  });
}