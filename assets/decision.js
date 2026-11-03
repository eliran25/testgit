(()=>{
 'use strict';
 const root=document.documentElement.dataset.siteRoot||'';
 const targets={
  insolvency:{title:'אפשר להתחיל במיפוי חובות ובחינת חלופות',text:'הסדר עם נושים, תזרים ויכולת החזר, מימון חלופי במקרים המתאימים והליך חדלות פירעון כשאין חלופה ישימה.',links:[['הסדרי חוב','practice/insolvency/debt-settlement/'],['חדלות פירעון ליחידים','practice/insolvency/individuals/'],['הוצאה לפועל','practice/insolvency/execution-proceedings/']]},
  'real-estate':{title:'בודקים זכויות, מסמכים ולוחות זמנים',text:'חשוב להתאים את הבדיקות לשאלה: רכישה, מכירה, שכירות או בעלות משותפת. לכל מסלול מסמכים וסיכונים שונים.',links:[['קניית דירה','practice/real-estate/buying-apartment/'],['מכירת דירה','practice/real-estate/selling-apartment/'],['חוזה שכירות','practice/real-estate/rental-agreements/']]},
  finance:{title:'מגדירים מראש את ההתחייבות והבטוחות',text:'בהלוואות, ערבויות ושעבודים חשוב להבין את חבות הצדדים, את העלות, את הזכויות בנכס ואת דרך השחרור.',links:[['בדיקת חוזה הלוואה','practice/finance/loan-agreements/'],['ערבות אישית','practice/finance/personal-guarantees/'],['שעבודים ובטוחות','practice/finance/security/']]}
 };
 document.querySelectorAll('[data-decision-tool]').forEach(tool=>{
  const answer=tool.querySelector('[data-decision-answer]');
  const radios=tool.querySelectorAll('input[name="main-topic"]');
  if(!answer||!radios.length)return;
  radios.forEach(r=>r.addEventListener('change',()=>{
   const d=targets[r.value];if(!d)return;
   const heading=document.createElement('h3');heading.textContent=d.title;
   const txt=document.createElement('p');txt.textContent=d.text;
   const links=document.createElement('div');links.className='decision-links';
   d.links.forEach(([label,path])=>{const a=document.createElement('a');a.textContent=label+' ←';a.href=root+'/'+path;links.appendChild(a)});
   const contact=document.createElement('a');contact.textContent='יצירת קשר עם המשרד';contact.href=root+'/contact/?topic='+encodeURIComponent(r.value);links.appendChild(contact);
   answer.replaceChildren(heading,txt,links);
  }));
 });
 const topicByKey={'insolvency':'חדלות פירעון והסדרי חוב','real-estate':'נדל״ן ומקרקעין','finance':'מימון ובטוחות'};
 const form=document.getElementById('lead-form');
 if(form){const t=new URLSearchParams(location.search).get('topic');const sel=form.querySelector('[name="topic"]');if(t&&topicByKey[t]&&sel)sel.value=topicByKey[t];}
})();
