(()=>{const b=document.querySelector('.burger'),n=document.getElementById('nav');
const t=o=>{n.classList.toggle('open',o);b.setAttribute('aria-expanded',o)};
b.onclick=()=>t(!n.classList.contains('open'));n.querySelectorAll('a').forEach(a=>a.onclick=()=>t(false));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.gi').forEach(g=>g.onclick=()=>{li.src=g.dataset.full;li.alt=g.querySelector('img').alt;lb.showModal()});
lb.querySelector('.x').onclick=()=>lb.close();lb.onclick=e=>{if(e.target===lb)lb.close()};})();

const ano=document.getElementById('ano');if(ano)ano.textContent=new Date().getFullYear();
