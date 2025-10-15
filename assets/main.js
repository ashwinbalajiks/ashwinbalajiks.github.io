
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
const sections=[...document.querySelectorAll('section[id]')];
const links=[...document.querySelectorAll('.nav-links a')];
const onScroll=()=>{
  let current=null;
  sections.forEach(s=>{
    const rect=s.getBoundingClientRect();
    if(rect.top<=80 && rect.bottom>80){ current=s.id; }
  });
  links.forEach(l=>{
    l.classList.toggle('active', l.getAttribute('href')==='#'+current);
  });
};
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();
    