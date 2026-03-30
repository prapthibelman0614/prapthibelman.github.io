document.addEventListener('DOMContentLoaded',()=>{
  const btns=document.querySelectorAll('.filter-btn');
  const cards=document.querySelectorAll('.project-card');
  btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      btns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f=btn.dataset.filter;
      cards.forEach(c=>{c.style.display=(f==='all'||c.classList.contains(f))?'flex':'none';});
    });
  });
  const track=document.getElementById('skillsTrack');
  if(track&&!window.matchMedia('(prefers-reduced-motion:reduce)').matches){
    let x=0,speed=0.55,boost=0;
    const chunk=track.querySelector('.ticker-chunk');
    let cw=chunk?chunk.getBoundingClientRect().width:0;
    window.addEventListener('resize',()=>{cw=chunk?chunk.getBoundingClientRect().width:cw;});
    window.addEventListener('scroll',()=>{boost=Math.min(6,boost+0.8);},{passive:true});
    (function tick(){
      x-=speed+boost;
      if(cw&&Math.abs(x)>=cw)x=0;
      track.style.transform=`translateX(${x}px)`;
      boost=Math.max(0,boost-0.04);
      requestAnimationFrame(tick);
    })();
  }
});
