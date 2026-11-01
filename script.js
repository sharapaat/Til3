/* ===== ДЕРЕКТЕР ===== */
const D={
 total:78,students:20,
 types:{
  gr:{n:'Грамматика',full:'Грамматикалық',c:28,p:34,def:'Сөйлем құрылымында, сөз таптарын қолдануда немесе сөйлем мүшелерін сәйкестендіруде болатын қателіктер. Көбіне ережені дұрыс қолданбаудан немесе жаттығу жеткіліксіздігінен пайда болады.',
   ex:[['Мен барады мектепке.','Мен мектепке барамын.'],['Ол кітап оқид.','Ол кітап оқиды.'],['Біз бардық демалысқа.','Біз демалысқа барамыз.'],['Сенің үйіңде кетті.','Сенің үйіңе кетті.'],['Анам тамақ жасап қойды.','Анам тамақ жасап отыр.'],['Мен көріп жатырмын фильм.','Мен фильмді көріп жатырмын.'],['Біз көрдім фильмді кеше.','Біз фильмді кеше көрдік.'],['Ол кетеді менімен бірге.','Ол менімен бірге кетеді.'],['Мен жазды хатты досыма.','Мен хатты досыма жаздым.'],['Сіз келді ма сабаққа?','Сіз сабаққа келдіңіз бе?']],
   oral:[['Мен мектепке, сабақ басталады өйткені барамын.','Мен мектепке барамын, өйткені сабақ басталады.']]},
  or:{n:'Орфография',full:'Орфографиялық және пунктуациялық',c:20,p:24,def:'Сөзді жазудағы немесе тыныс белгілерін қоюдағы қателіктер. Көбіне жазу дағдысының төмендігінен және мәтінге мән бермеуден туындайды.',
   ex:[['Менің атым Арман','Менің атым, Арман',1],['Балалар, оқушылар','балалар мен оқушылар'],['Ол мектепке барды мен мен үйге қайттым','Ол мектепке барды, мен үйге қайттым'],['Қала өте әдемі','Қала, өте әдемі.',1],['Менің досым жақсы дос','Менің досым – жақсы дос.'],['Кітаптарды үстелге қойдық ол қазір оқу бөлмесінде','Кітаптарды үстелге қойдық, ол қазір оқу бөлмесінде'],['Мектепке барамыз біз әр күні','Біз әр күні мектепке барамыз.'],['Сабақ басталды балалар отырсын','Сабақ басталды, балалар отырсын.'],['Менің анам тамақ жасады өте дәмді','Менің анам тамақ жасады, өте дәмді.'],['Ол келді менің үйіме бірден','Ол бірден менің үйіме келді.']],oral:[]},
  lx:{n:'Лексика',full:'Лексикалық',c:18,p:22,def:'Сөздің мағынасы мен қолданылуындағы қателіктер. Сөздік қормен тікелей байланысты, сондықтан сөздік қорды дамыту маңызды.',
   ex:[['кітап үйі','кітапхана'],['қаламсаптар жинауышы','қаламсаптар жинаушы'],['ағаш отырғызуышы','ағаш отырғызушы'],['жасыл алаң','спорт алаңы'],['асық ойын','асық ойыны'],['торт беру','торт сыйлау'],['гүл бақ','гүл бақшасы'],['ағаш үйі','ағаштан жасалған үй'],['сурет салуышы','суретші'],['сабаққа келуыш','сабаққа келген адам']],
   oral:[['Сәлем, кеттім','Сәлеметсіз бе, мен кетіп бара жатырмын.'],['Мынау супер','Бұл өте керемет.'],['Бәрі окей','Бәрі жақсы.']]},
  ph:{n:'Фонетика',full:'Фонетикалық',c:12,p:15,def:'Сөздердің дыбысталуы мен айтылуындағы қателіктер. Сөйлеу аппаратын толық меңгермеуден немесе тілдік есту дағдысының жетілмеуінен туындайды.',
   ex:[['қызғалақ','қызғалдақ'],['кала','қала'],['балаа','бала'],['көргенм','көргенім'],['ктапты','кітапты'],['оқуышы','оқушы'],['сабақтам','сабақтамын'],['тамашаа','тамаша'],['ойнақшы','ойыншы'],['көрдімее','көрдім']],
   oral:[['қалем','қалам'],['китап','кітап'],['сү','сүт'],['жылк','жылқы']]}
 },
 other:5,
 survey:[
  {q:'Сіз қазақ тілінде сөйлегенде қателесесіз бе?',o:[['Иә',14],['Жоқ',6]]},
  {q:'Жазба жұмыста грамматикалық қателіктер жасайсыз ба?',o:[['Жиі',5],['Кейде',12],['Ешқашан',3]]},
  {q:'Көркем әдебиетті қаншалықты жиі оқисыз?',o:[['Күнделікті',4],['Аптасына 2–3 рет',10],['Сирек',6]]},
  {q:'Әлеуметтік желілерде қысқартылған сөздерді жиі қолданасыз ба?',o:[['Иә',16],['Жоқ',4]]},
  {q:'Жазбаша жұмыстарда қателіктерді түзету сізге көмектеседі ме?',o:[['Иә',18],['Жоқ',2]]}],
 causes:[['🏠','Тілдік ортаның әсері','Отбасы мен мектепте әдеби норма сақталмаса, бала сөздерді дұрыс қолданбауға үйренеді; сленг пен жаргон да әсер етеді.'],['📱','Әлеуметтік желі мен технологиялар','Қысқартылған мәтін, эмодзи және бейәдеби сөздер жазу мәдениетіне кері ықпал етеді.'],['📚','Оқу дағдысының төмендігі','Көркем және ғылыми-көпшілік әдебиетті аз оқу сөздік қорды шектейді.'],['🧠','Психологиялық және жас ерекшелік','Ұялшақтық, өзіне сенімсіздік, асығыстық және тілдік дағдының толық дамымауы.']],
 sol:[['✍️','Диктант және көркем мәтінмен жұмыс'],['📝','Мазмұндама және шығармашылық тапсырмалар'],['🔍','Қателікті талдау және түсіндіру'],['🗣️','Тілдік ортаға мән беру'],['📖','Әдеби сөздік қорды дамыту («Абай жолы» т.б.)'],['🎲','Топтық және ойын әдістері'],['💻','Цифрлық құралдар: dictant.til.kz, emle.kz, Tilalemi.kz']]
};

const CK=['gr','or','lx','ph'];
const COL={gr:'var(--gr)',or:'var(--or)',lx:'var(--lx)',ph:'var(--ph)'};

const DIAG=[
 {c:'ph',q:'«Қызғалдақ» сөзі қалай дұрыс жазылады?',o:['қызғалақ','қызғалдақ','қызғалтақ'],a:1,why:'«д» дыбысы түсіп қалмауы керек: қыз-ғал-дақ.'},
 {c:'ph',q:'Қайсысы дұрыс жазылған?',o:['оқуышы','оқушы','оқышу'],a:1,why:'Әдеби норма бойынша сөз «оқушы» түрінде жазылады.'},
 {c:'ph',q:'Қайсысы дұрыс жазылған?',o:['ктапты','кітапты','китапты'],a:1,why:'«і» дыбысын түсірмеу де, «и» деп алмастыру да қате: кітап.'},
 {c:'lx',q:'«Кітап үйі» орнына қалыптасқан атау қайсы?',o:['кітап үйі','кітапхана','оқу бөлмесі'],a:1,why:'Қалыптасқан атау — «кітапхана».'},
 {c:'lx',q:'Сурет салатын адам кім?',o:['сурет салуышы','суретші','сурет салған'],a:1,why:'Дұрыс сөз — «суретші».'},
 {c:'lx',q:'Гүл өсірілетін жер қалай аталады?',o:['гүл бақ','гүл бақшасы','гүл үй'],a:1,why:'Дұрыс тіркес — «гүл бақшасы».'},
 {c:'gr',q:'«Мен мектепке ___.»',o:['барады','барамын','барасың'],a:1,why:'Бастауыш 1-жақта (Мен), баяндауыш та 1-жақта: барамын.'},
 {c:'gr',q:'«Ол кітап ___.»',o:['оқид','оқиды','оқимын'],a:1,why:'Баяндауыштың жалғауы түсіп қалмауы керек: оқиды.'},
 {c:'gr',q:'Қайсысы дұрыс сөйлем?',o:['Сіз келді ма сабаққа?','Сіз сабаққа келдіңіз бе?','Сіз келді бе сабаққа?'],a:1,why:'«Сіз» — сыпайы 2-жақ: келдіңіз бе; баяндауыш сөйлем соңында.'},
 {c:'or',q:'Үтір дұрыс қойылған сөйлемді таңда.',o:['Ол мектепке барды мен үйге қайттым','Ол мектепке барды, мен үйге қайттым','Ол, мектепке барды мен үйге қайттым'],a:1,why:'Сөйлемнің екі ойы арасына үтір қойылады.'},
 {c:'or',q:'Қайсысы дұрыс?',o:['Менің досым жақсы дос','Менің досым – жақсы дос','Менің, досым жақсы дос'],a:1,why:'Бастауыш пен баяндауыш арасына сызықша қойылады.'},
 {c:'or',q:'Қайсысы дұрыс?',o:['Сабақ басталды балалар отырсын','Сабақ басталды, балалар отырсын','Сабақ, басталды балалар отырсын'],a:1,why:'Сөйлем бөліктерінің арасына үтір қойылады.'}
].map(x=>({k:'c',...x}));

const pairs=(c,a,b)=>D.types[c].ex.slice(a,b).map(x=>[x[0],x[1]]);

const EXTRA={
 ph:[
  {k:'t',c:'ph',q:'Қате сөзді түзет: «кала»',a:'қала',why:'«қ» дыбысы: қала.'},
  {k:'t',c:'ph',q:'Қате сөзді түзет: «тамашаа»',a:'тамаша',why:'Артық дыбыс жоқ: тамаша.'},
  {k:'t',c:'ph',q:'Қате сөзді түзет: «ктапты»',a:'кітапты',why:'«і» дыбысын түсірмеу керек.'}
 ],
 lx:[
  {k:'m',c:'lx',q:'Қате тіркесті дұрыс нұсқасымен сәйкестендір',p:pairs('lx',0,10).filter((_,i)=>[0,3,5,6,8].includes(i))},
  {k:'m',c:'lx',q:'Қате тіркесті дұрыс нұсқасымен сәйкестендір',p:pairs('lx',0,10).filter((_,i)=>[1,2,4,7,9].includes(i))}
 ],
 gr:[
  {k:'o',c:'gr',q:'Сөздерден дұрыс сөйлем құра',a:'Мен хатты досыма жаздым.',why:'Баяндауыш сөйлем соңында және бастауышпен жағы сәйкес.'},
  {k:'o',c:'gr',q:'Сөздерден дұрыс сөйлем құра',a:'Біз фильмді кеше көрдік.',why:'«Біз» — көпше 1-жақ: көрдік; баяндауыш соңда.'}
 ],
 or:[
  {k:'o',c:'or',q:'Сөздерден дұрыс сөйлем құра',a:'Біз әр күні мектепке барамыз.',why:'Баяндауыш сөйлемнің соңында тұрады.'}
 ]
};

const labTasks=c=>[...DIAG.filter(x=>x.c==c),...EXTRA[c]];
const POOL=[...DIAG,...CK.flatMap(c=>EXTRA[c])];

/* ===== КӨМЕКШІЛЕР ===== */
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const h=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.innerHTML=x;return e};
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const norm=s=>s.trim().toLowerCase().replace(/\s+/g,' ').replace(/[.!?]+$/,'');
const diff=(a,b)=>{
 let i=0;
 while(i<a.length&&i<b.length&&a[i]===b[i])i++;
 let j=0;
 while(j<a.length-i&&j<b.length-i&&a[a.length-1-j]===b[b.length-1-j])j++;
 return[
  esc(a.slice(0,i))+'<u>'+esc(a.slice(i,a.length-j))+'</u>'+esc(a.slice(a.length-j)),
  esc(b.slice(0,i))+'<mark>'+esc(b.slice(i,b.length-j))+'</mark>'+esc(b.slice(b.length-j))
 ];
};
const chip=c=>`<span class="chip" style="background:${COL[c]}">${D.types[c].n}</span>`;
const pct=(n,t)=>(n/t*100).toFixed(1).replace('.',',');

function toast(m){
 const t=$('#toast');
 t.textContent=m;
 t.classList.add('on');
 clearTimeout(toast.t);
 toast.t=setTimeout(()=>t.classList.remove('on'),2600);
}
function pop(m){
 const p=h('div','pop',m);
 document.body.append(p);
 setTimeout(()=>p.remove(),1000);
}

/* ===== ЖАҒДАЙ (LocalStorage) ===== */
const KEY='tilqalqan.v1';
let S={xp:0,done:0,ok:0,fixed:0,prof:null,det:0,ach:{},best:0,maxc:0,games:0,lab:{}};
try{Object.assign(S,JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const lvl=()=>Math.floor(S.xp/100)+1;
const LN=['Бастаушы','Зерттеуші','Лаборант','Қалқан күзетшісі','Тіл шебері'];
const lvlName=()=>LN[Math.min(4,(lvl()-1)/2|0)];

const ACH=[
 ['👣','Алғашқы қадам','Бір дұрыс жауап беру',()=>S.ok>=1],
 ['🧪','Диагностика','Тілдік профильді жасау',()=>!!S.prof],
 ['🔎','Қате аңшысы','Қате детекторын іске қосу',()=>S.det>=1],
 ['🔥','Комбо ×5','Ойында қатарынан 5 дұрыс жауап',()=>S.maxc>=5],
 ['🏛️','Төрт зертхана','Барлық зертхананы аяқтау',()=>Object.keys(S.lab).length>=4],
 ['🛡️','Қалқан иесі','Бір ойында 100 XP жинау',()=>S.best>=100],
 ['⭐','300 XP','Барлығы 300 XP жинау',()=>S.xp>=300]
];

function checkAch(){
 ACH.forEach((a,i)=>{
  if(!S.ach[i]&&a[3]()){S.ach[i]=1;toast('🏆 Жетістік: '+a[1])}
 });
 save();
}
function award(n){
 const b=lvl();
 S.xp+=n;
 if(lvl()>b)toast('🎉 Жаңа деңгей: '+lvl()+' — '+lvlName());
 checkAch();
}
function record(ok,fix){
 S.done++;
 if(ok){S.ok++;if(fix)S.fixed++}
 checkAch();
}

/* ===== ТАПСЫРМА ҚОЗҒАЛТҚЫШЫ ===== */
const ans=t=>t.k=='c'?t.o[t.a]:t.k=='m'?'жұптарды қараңыз':t.a;

function mount(el,t,cb){
 el.innerHTML='';
 let fin=false;
 const end=(ok,why)=>{
  if(fin)return;
  fin=true;
  $$('button,input',el).forEach(b=>b.disabled=true);
  el.append(h('div','fb '+(ok?'ok':'no'),(ok?'✅ Дұрыс! ':'❌ Қате. Дұрыс жауап: <b>'+esc(ans(t))+'</b>. ')+esc(why||t.why||'')));
  cb(ok);
 };
 el.append(h('h3',0,esc(t.q)));

 if(t.k=='c'){
  const b=h('div','opts');
  shuf(t.o.map((x,i)=>[x,i])).forEach(([x,i])=>{
   const o=h('button','opt',esc(x));
   o.onclick=()=>{
    o.classList.add(i==t.a?'ok':'no');
    if(i!=t.a)$$('.opt',b).find(z=>z.textContent==t.o[t.a])?.classList.add('ok');
    end(i==t.a);
   };
   b.append(o);
  });
  el.append(b);
 }

 /* ===== МӘТІН ЕНГІЗУ (әріп батырмалары жоқ) ===== */
 if(t.k=='t'){
  const r=h('div','row'), i=h('input','in');
  i.type='text';
  i.placeholder='Дұрыс нұсқасын жаз…';
  i.autocomplete='off';
  i.autocapitalize='off';
  i.spellcheck=false;
  i.setAttribute('autocorrect','off');
  i.setAttribute('inputmode','text');
  i.style.pointerEvents='auto';
  i.style.userSelect='text';
  i.style.webkitUserSelect='text';
  i.onfocus=()=>setTimeout(()=>{try{i.scrollIntoView({block:'center',behavior:'smooth'})}catch(e){}},300);
  const b=h('button','btn sm','Тексеру');
  const go=()=>{if(!i.value.trim())return;end(norm(i.value)==norm(t.a))};
  b.onclick=go;
  i.onkeydown=e=>{if(e.key=='Enter'){e.preventDefault();go()}};
  r.append(i,b);
  el.append(r);
  setTimeout(()=>{try{i.focus({preventScroll:true})}catch(e){i.focus()}},50);
 }

 if(t.k=='o'){
  const ws=t.a.split(' ');
  const got=[];
  const pool=h('div','chips');
  const line=h('div','chips');
  line.style.minHeight='56px';
  const draw=()=>{
   pool.innerHTML='';
   line.innerHTML='';
   shuf(ws.map((w,i)=>[w,i])).filter(([,i])=>!got.includes(i)).forEach(([w,i])=>{
    const c=h('button','wd',esc(w));
    c.onclick=()=>{got.push(i);draw()};
    pool.append(c);
   });
   got.forEach(i=>{
    const c=h('button','wd',esc(ws[i]));
    c.style.background='linear-gradient(135deg,var(--c),var(--a))';
    c.onclick=()=>{got.splice(got.indexOf(i),1);draw()};
    line.append(c);
   });
  };
  draw();
  const r=h('div','row');
  const b=h('button','btn sm','Тексеру');
  const x=h('button','btn sm alt','Тазалау');
  b.onclick=()=>got.length==ws.length?end(norm(got.map(i=>ws[i]).join(' '))==norm(t.a)):toast('Барлық сөзді қой');
  x.onclick=()=>{got.length=0;draw()};
  r.append(b,x);
  el.append(line,pool,r);
 }

 if(t.k=='m'){
  let sel=null,bad=0,left=t.p.length;
  const g=h('div','mt');
  const L=t.p.map(p=>p[0]);
  const R=shuf(t.p.map(p=>p[1]));
  const lb=L.map(x=>{
   const b=h('button',0,esc(x));
   b.onclick=()=>{$$('button',g).forEach(z=>z.classList.remove('sel'));sel=b;b.classList.add('sel')};
   return b;
  });
  const rb=R.map(x=>{
   const b=h('button',0,esc(x));
   b.onclick=()=>{
    if(!sel)return toast('Алдымен сол жақтағы тіркесті таңда');
    const ok=t.p.find(p=>p[0]==sel.textContent)[1]==x;
    if(ok){
     sel.classList.replace('sel','done');
     b.classList.add('done');
     sel=null;
     if(!--left)end(bad<2,bad?'Қате басу: '+bad:'Мінсіз!');
    }else{
     bad++;
     b.classList.add('sh');
     setTimeout(()=>b.classList.remove('sh'),400);
    }
   };
   return b;
  });
  lb.forEach((b,i)=>g.append(b,rb[i]));
  el.append(g);
 }

 return()=>end(false,'Уақыт бітті.');
}

function session(el,tasks,onEnd){
 let i=0,ok=0;
 const run=()=>{
  el.innerHTML='';
  const d=h('div','dots');
  tasks.forEach((_,j)=>d.append(h('i',j<i?'f':'')));
  const box=h('div');
  const nx=h('div','row');
  nx.style.marginTop='14px';
  el.append(d,box,nx);
  mount(box,tasks[i],r=>{
   record(r,tasks[i].k=='t'||tasks[i].k=='o');
   if(r){ok++;award(5)}
   const b=h('button','btn sm',i+1<tasks.length?'Келесі':'Нәтижені көру');
   b.onclick=()=>{i++;i<tasks.length?run():onEnd(ok,tasks.length)};
   nx.append(b);
   b.focus();
  });
 };
 run();
}

/* ===== НАВИГАЦИЯ ===== */
const VIEWS=[
 ['home','Басты бет'],
 ['profile','Тілдік профиль'],
 ['detector','Қате детекторы'],
 ['labs','Зертханалар'],
 ['evolution','Қате эволюциясы'],
 ['game','Ойын'],
 ['results','Зерттеу нәтижесі'],
 ['map','Қате картасы'],
 ['progress','Жетістіктер']
];
$('#nav').innerHTML=VIEWS.map(v=>`<a href="#${v[0]}" data-v="${v[0]}">${v[1]}</a>`).join('');

const R={};
let labCat='gr',mapSel='gr',cur='';

function show(){
 const v=VIEWS.find(x=>x[0]==location.hash.slice(1))?.[0]||'home';
 stopGame();
 cur=v;
 $$('.view').forEach(e=>e.classList.toggle('on',e.id=='v-'+v));
 $$('nav a').forEach(a=>a.classList.toggle('on',a.dataset.v==v));
 R[v]();
 scrollTo(0,0);
 const a=$('nav a.on');
 a&&a.scrollIntoView({inline:'center',block:'nearest'});
}
const go=(v)=>{location.hash=v};
addEventListener('hashchange',show);

/* ===== БАСТЫ БЕТ ===== */
R.home=()=>{
 const el=$('#v-home');
 el.innerHTML=`
 <div class="hero">
  <div class="letters" id="lt"></div>
  <div class="hero-in">
   <h1 class="brand">
    <svg viewBox="0 0 64 64" aria-hidden="true">
     <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b2fd6"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs>
     <path d="M32 4 56 13v18c0 15-10 25-24 29C18 56 8 46 8 31V13z" fill="url(#lg)"/>
     <path d="M22 33l8 8 14-17" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
     Тілдік қателер: себептері және шешу жолдары
   </h1>
   <p class="tag">Қазақ тілінің цифрлық зертханасы</p>
   <p class="sub">Оқушылардың тілдік қателіктерін анықтайды, түсіндіреді және түзетуге үйретеді. <br> Ғылыми жобаның нақты деректері негізінде жасалған.</p>
   <div class="morph g" aria-live="polite"><small>қате</small><b id="mw" class="bad"></b></div>
   <div class="cta"><a class="btn" href="#results">Зерттеуді бастау</a><a class="btn alt" href="#profile">Тілдік деңгейімді анықтау</a></div>
  </div>
 </div>
 <div class="wrap" style="padding-top:0">
  <div class="strip g">
   <div><div class="num" data-n="4">0</div><small>негізгі қате түрі</small></div>
   <div><div class="num" data-n="20">0</div><small>зерттеуге қатысқан оқушы</small></div>
   <div><div class="num" data-n="78">0</div><small>тіркелген қате</small></div>
   <div class="share">${CK.map(c=>`<a href="#results" style="background:${COL[c]};flex:${D.types[c].c}" title="${D.types[c].full}: ${D.types[c].c} қате">${D.types[c].p}%</a>`).join('')}</div>
   <small style="grid-column:1/-1">Жұмыстағы үлестер: ${CK.map(c=>D.types[c].n+' '+D.types[c].p+'%').join(' · ')}; басқа қателіктер — ${D.other}%.</small>
  </div>
  <h2>Платформа не істейді?</h2>
  <p class="lead">Сайтты ашқан адам бес нәрсені көреді: зерттеу жүргізіледі, қате табылады, түсіндіріледі, оқушы үйренеді, нәтиже статистикамен көрсетіледі.</p>
  <div class="grid g3">
   ${[['📊','Зерттейді','20 оқушының сауалнамасы мен 78 қате','results'],['🔎','Қатені табады','Орфография, грамматика, лексика','detector'],['💡','Түсіндіреді','Қате эволюциясы: 5 кезең','evolution'],['🎮','Үйретеді','Төрт зертхана және ойын','labs'],['🗺️','Статистика','Интерактивті қате картасы','map']].map(x=>`<a class="g tile" href="#${x[3]}"><span>${x[0]}</span><b>${x[1]}</b><p>${x[2]}</p></a>`).join('')}
  </div>
  <div class="g" style="margin-top:22px">
   <h3>Ғылыми жоба</h3>
   <p><b>Балалар мен жасөспірімдердің тілдік қателіктерінің себептері мен оларды шешу жолдары.</b></p>
   <p style="color:var(--mut);font-size:14px;margin-top:6px">М. Дүйсенов атындағы №15 мектеп-лицей, Қызылорда қ., 2026.    Орындаған: Бауыржанқызы Гауһар (9-сынып). Жетекшісі: Шарипова Кулпаш.<br><b>Болжам:</b> қателіктердің себептері жүйелі анықталып, арнайы әдіс-тәсілдер қолданылса, оқушылардың тілдік сауаттылығы артады.</p>
  </div>
 </div>`;
 const lt=$('#lt');
 'ӘҒҚҢӨҰҮҺІабвгдеқңөүұһ'.split('').concat('ә,қ,ң,ө,ү,і,ғ,һ,ұ'.split(',')).forEach(ch=>{
  const i=h('i',0,ch);
  i.style.cssText=`left:${Math.random()*96}%;--s:${20+Math.random()*50}px;--d:${9+Math.random()*10}s;--w:-${Math.random()*14}s`;
  lt.append(i);
 });
 $$('.num').forEach(n=>{
  const to=+n.dataset.n,t0=performance.now();
  (function f(t){
   const p=Math.min(1,(t-t0)/1200);
   n.textContent=Math.round(to*(1-Math.pow(1-p,3)));
   p<1&&requestAnimationFrame(f);
  })(t0);
 });
 clearInterval(R.mt);
 const P=['қызғалақ|қызғалдақ','кала|қала','ктапты|кітапты','оқуышы|оқушы','ойнақшы|ойыншы','көргенм|көргенім'].map(x=>x.split('|'));
 let k=0;
 const w=$('#mw');
 const step=async()=>{
  if(cur!='home')return;
  const[a,b]=diff(...P[k%P.length]);
  w.className='bad';w.innerHTML=a;
  await sleep(1500);
  w.classList.add('sw');
  await sleep(450);
  w.className='sw good';w.innerHTML=b;
  void w.offsetWidth;
  w.classList.remove('sw');
  k++;
  await sleep(1900);
  w.classList.add('sw');
  await sleep(400);
  step();
 };
 step();
};

/* ===== ДИАГНОСТИКА ЖӘНЕ ЖЕКЕ ПРОФИЛЬ ===== */
function radar(v){
 const C=175,Rr=80;
 const pt=(i,r)=>{const a=-Math.PI/2+i*Math.PI/2;return[C+Math.cos(a)*Rr*r,C+Math.sin(a)*Rr*r]};
 const poly=r=>CK.map((_,i)=>pt(i,r).join(',')).join(' ');
 return`<svg viewBox="0 0 300 300" style="width:100%;max-width:340px;display:block;margin:auto">
  ${[.25,.5,.75,1].map(r=>`<polygon points="${poly(r)}" fill="none" stroke="rgba(124,58,237,.25)"/>`).join('')}
  ${CK.map((_,i)=>`<line x1="150" y1="150" x2="${pt(i,1)[0]}" y2="${pt(i,1)[1]}" stroke="rgba(124,58,237,.2)"/>`).join('')}
  <polygon points="${CK.map((c,i)=>pt(i,v[c]/100).join(',')).join(' ')}" fill="rgba(124,58,237,.3)" stroke="var(--b)" stroke-width="3" style="transform-origin:150px 150px;animation:rd 1s ease"/>
${CK.map((c,i)=>{const p=pt(i,v[c]/100),q=pt(i,1.0);return`<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="${COL[c]}"/><text x="${q[0]}" y="${q[1]+4}" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor"><tspan x="${q[0]}" dy="0">${D.types[c].n}</tspan><tspan x="${q[0]}" dy="14">${v[c]}%</tspan></text>`}).join('')}
 </svg>
 <style>@keyframes rd{from{transform:scale(0)}}</style>`;
}

R.profile=()=>{
 const el=$('#v-profile'),p=S.prof;
 const head='<h2>Жеке тілдік профиль</h2><p class="lead">12 сұрақтық диагностика төрт бағыт бойынша деңгейіңді өлшейді, әлсіз тұстарыңды көрсетеді және жеке жаттығу ұсынады.</p>';
 if(!p){
  const demo={gr:65,or:85,lx:45,ph:90};
  el.innerHTML=head+`
  <div class="grid g2">
   <div class="g">${radar(demo)}<p style="text-align:center;color:var(--mut);font-size:13px">Бұл — тек демонстрациялық мысал</p></div>
   <div class="g"><h3>Диагностикаға дайынсың ба?</h3><p style="color:var(--mut)">Әр бағыттан 3 сұрақ: грамматика, орфография, лексика, фонетика. Нәтиже осы құрылғыда сақталады.</p><br><button class="btn" id="st">Диагностиканы бастау</button></div>
  </div>
  <div class="g" id="tb" style="margin-top:16px;display:none"></div>`;
  $('#st').onclick=()=>{
   $('#tb').style.display='block';
   const box=$('#tb'),sc={gr:0,or:0,lx:0,ph:0};
   const ts=shuf(DIAG);
   let i=0;
   const runQ=()=>{
    box.innerHTML='';
    const d=h('div','dots');
    ts.forEach((_,j)=>d.append(h('i',j<i?'f':'')));
    const b=h('div'),nx=h('div');
    nx.style.marginTop='14px';
    box.append(d,b,nx);
    mount(b,ts[i],r=>{
     record(r);
     if(r){sc[ts[i].c]++;award(5)}
     const bt=h('button','btn sm',i+1<ts.length?'Келесі':'Профильді көру');
     bt.onclick=()=>{
      i++;
      if(i<ts.length)runQ();
      else{
       S.prof={...Object.fromEntries(CK.map(c=>[c,Math.round(sc[c]/3*100)])),ts:Date.now()};
       checkAch();save();R.profile();
      }
     };
     nx.append(bt);
    });
   };
   runQ();
   $('#tb').scrollIntoView({behavior:'smooth'});
  };
  return;
 }
 const avg=Math.round(CK.reduce((s,c)=>s+p[c],0)/4);
 const lv=avg<40?'Бастаушы':avg<70?'Дамушы':avg<90?'Сенімді':'Шебер';
 const srt=[...CK].sort((a,b)=>p[a]-p[b]);
 el.innerHTML=head+`
 <div class="grid g2">
  <div class="g">${radar(p)}</div>
  <div class="g">
   <h3>Жалпы даму деңгейі: ${lv} (${avg}%)</h3>
   ${CK.map(c=>`<div><b>${D.types[c].n}</b> <span style="float:right;font-weight:700">${p[c]}%</span><div class="bar"><i style="background:${COL[c]}" data-w="${p[c]}"></i></div></div>`).join('')}
  </div>
 </div>
 <div class="g" style="margin-top:16px">
  <h3>Әлсіз тұстар және жеке жаттығулар</h3>
  ${srt.slice(0,2).map(c=>p[c]<100?`<div class="pair" style="margin:8px 0">${chip(c)}<span style="flex:1">«${D.types[c].n}» бағытында ${p[c]}% — қате көбірек осы жерде. ${D.types[c].def.split('.')[0]}.</span><button class="btn sm" data-lab="${c}">Жаттығу</button></div>`:'').join('')||'<p>Барлық бағыт бойынша үздік нәтиже! Ойында деңгейіңді көтер.</p>'}
  <br>
  <div class="row"><button class="btn alt sm" id="rt">Қайта тапсыру</button><a class="btn sm" href="#game">Ойынға өту</a></div>
 </div>`;
 $$('[data-lab]').forEach(b=>b.onclick=()=>{labCat=b.dataset.lab;go('labs')});
 $('#rt').onclick=()=>{S.prof=null;save();R.profile()};
 setTimeout(()=>$$('.bar i',el).forEach(i=>i.style.width=i.dataset.w+'%'),60);
};

/* ===== ҚАТЕ ДЕТЕКТОРЫ ===== */
const TQ_AI={endpoint:null};
const B='(?<!\\p{L})',E='(?!\\p{L})';
const M1={барады:'барамын',келеді:'келемін',оқиды:'оқимын',жазады:'жазамын',көреді:'көремін',біледі:'білемін',айтады:'айтамын',кетеді:'кетемін',барды:'бардым',келді:'келдім',оқыды:'оқыдым',жазды:'жаздым',көрді:'көрдім',кетті:'кеттім'};
const B1={бардым:'бардық',келдім:'келдік',жаздым:'жаздық',көрдім:'көрдік',кеттім:'кеттік'};
const V3=Object.keys(M1);

const DICT=[
 ...D.types.ph.ex.concat([['китап','кітап'],['қалем','қалам']]).filter(x=>x[0]!='сабақтам').map(x=>[x[0],x[1],'ph',`«${x[0]}» сөзінде дыбыс бұрмаланған немесе түсіп қалған; әдеби норма бойынша «${x[1]}» деп жазылады және айтылады.`]),
 ...[['кітап үйі','кітапхана'],['сурет салуышы','суретші'],['гүл бақ','гүл бақшасы'],['торт беру','торт сыйлау'],['ағаш отырғызуышы','ағаш отырғызушы'],['қаламсаптар жинауышы','қаламсаптар жинаушы'],['сабаққа келуыш','сабаққа келген адам'],['жасыл алаң','спорт алаңы']].map(x=>[...x,'lx',`«${x[0]}» тіркесі қалыптасқан норма емес; мағынаға дәл келетін нұсқа — «${x[1]}».`]),
 ...[['окей','жақсы'],['супер','өте жақсы'],['класс','тамаша']].map(x=>[...x,'lx',`«${x[0]}» — сленг/ауызекі сөз; жазба әдеби тілде «${x[1]}» деген дұрыс.`])
];
const escRe=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const cap=(m,r)=>m[0]!=m[0].toLowerCase()?r[0].toUpperCase()+r.slice(1):r;

function demoDetect(text){
 const out=[];
 const add=(m,t,r,why)=>out.push({s:m.index,e:m.index+m[0].length,t,w:m[0],r,why});
 const re=s=>new RegExp(s,'giu');
 DICT.forEach(([w,r,t,why])=>{
  for(const m of text.matchAll(re(B+escRe(w)+E)))add(m,t,cap(m[0],r),why);
 });
 [['оқид','оқиды'],['барад','барады'],['келед','келеді'],['жазад','жазады']].forEach(([w,r])=>{
  for(const m of text.matchAll(re(B+w+E)))add(m,'gr',r,`Баяндауыштың жіктік жалғауы түсіп қалған: «${w}» емес, «${r}».`);
 });
 for(const m of text.matchAll(re(B+'Сіз\\s+келді\\s+ма\\s+сабаққа\\?')))add(m,'gr','Сіз сабаққа келдіңіз бе?','«Сіз» — сыпайы 2-жақ, баяндауыш «келдіңіз», сұраулық шылау «бе» болады; баяндауыш сөйлем соңында тұрады.');
 [['Мен',M1],['Біз',B1],['Ол',null]].forEach(([s,map])=>{
  const vs=Object.keys(map||M1).join('|');
  for(const m of text.matchAll(re(`${B}(${s})\\s+(${vs})\\s+((?:\\p{L}+\\s?){1,3}?)(?=[.!?]|$)`))){
   const v=m[2].toLowerCase(),nv=map?map[v]:m[2],ch=nv!=v;
   add(m,'gr',`${m[1]} ${m[3].trim()} ${nv}`,(ch?`Бастауыш «${m[1]}» ${s=='Мен'?'1-жақта':'көпше 1-жақта'} тұр, сондықтан баяндауыш «${m[2]}» емес, «${nv}» болуы керек. `:'')+'Қазақ тілінде баяндауыш сөйлемнің соңында тұрады: толықтауыш пен пысықтауыш оның алдына қойылады.');
  }
 });
 for(const m of text.matchAll(re(`${B}(Мен)\\s+((?:\\p{L}+\\s+){0,2})(${V3.join('|')})${E}`)))add(m,'gr',`Мен ${m[2]}${M1[m[3].toLowerCase()]}`,`Бастауыш бірінші жақта (Мен) тұрғандықтан, баяндауыш та бірінші жаққа сәйкес келуі керек: «${m[3]}» → «${M1[m[3].toLowerCase()]}».`);
 for(const m of text.matchAll(re(`${B}(барды|келді|оқыды|қойдық|жазды|басталды)\\s+(мен|ол|біз|балалар)(?=\\s\\p{L})`)))add(m,'or',`${m[1]}, ${m[2]}`,'Сөйлемнің екі ойы (бөлігі) арасында үтір қойылады.');
 for(const m of text.matchAll(re(`${B}(досым|анам|атам|әкем|ағам)\\s+(жақсы|үздік)\\s+(дос|адам|оқушы)${E}`)))add(m,'or',`${m[1]} – ${m[2]} ${m[3]}`,'Бастауыш пен баяндауыш арасына сызықша қойылады.');
 for(const m of text.matchAll(re(`${B}(\\p{L}+)\\s+\\1${E}`)))add(m,'or',m[1],'Сөз қатарынан екі рет қайталанған — артық сөзді алып тастау керек.');
 out.sort((a,b)=>a.s-b.s||b.e-a.e);
 const k=[];
 let end=-1;
 out.forEach(o=>{if(o.s>=end){k.push(o);end=o.e}});
 return k;
}

async function detect(text){
 if(TQ_AI.endpoint){
  try{
   const r=await fetch(TQ_AI.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text})});
   return(await r.json()).issues;
  }catch(e){
   toast('AI сервері жауап бермеді, демо алгоритм қолданылды');
  }
 }
 return demoDetect(text);
}

R.detector=()=>{
 const el=$('#v-detector');
 if(el.dataset.r)return;
 el.dataset.r=1;
 el.innerHTML=`
 <h2>Қате детекторы</h2>
 <p class="lead">Қазақша мәтінді енгіз — орфографиялық, грамматикалық және лексикалық қателер түрлі түспен ерекшеленіп, түзетуі мен себебі көрсетіледі.</p>
 <div class="warn" style="margin-bottom:16px">⚙️ <b>Демо режим:</b> бұл ереже мен сөздікке негізделген алгоритм, толыққанды жасанды интеллект емес. Тек жобадағы қателік үлгілерін және бірнеше жалпы ережені таниды.</div>
 <div class="g">
  <textarea id="tx" placeholder="Мәтінді осында жаз…" aria-label="Мәтін"></textarea>
  <div class="row" style="margin-top:12px">
   <button class="btn" id="ck">Тексеру</button>
   <button class="btn alt" id="sm">Үлгі мәтін</button>
   <button class="btn alt" id="cl">Тазалау</button>
  </div>
 </div>
 <div id="out" style="margin-top:18px"></div>`;
 const tx=$('#tx');
 $('#sm').onclick=()=>tx.value='Мен барады мектепке. Ол кітап оқид. Мен жазды хатты досыма. Менің досым жақсы дос. Ол мектепке барды мен үйге қайттым. Қызғалақ гүлдеді, мен кітап үйі туралы айтамын, окей.';
 $('#cl').onclick=()=>{tx.value='';$('#out').innerHTML=''};
 $('#ck').onclick=async()=>{
  const t=tx.value;
  if(!t.trim())return toast('Алдымен мәтін енгіз');
  const is=await detect(t);
  S.det++;
  checkAch();
  const o=$('#out');
  let html='',p=0;
  is.forEach(x=>{
   html+=esc(t.slice(p,x.s))+`<span class="hl t-${x.t}" title="${esc(x.r)}">${esc(t.slice(x.s,x.e))}</span>`;
   p=x.e;
  });
  html+=esc(t.slice(p));
  const fixed=(()=>{
   let r='',q=0;
   is.forEach(x=>{r+=t.slice(q,x.s)+x.r;q=x.e});
   return r+t.slice(q);
  })();
  const cnt=c=>is.filter(x=>x.t==c).length;
  o.innerHTML=`
  <div class="g">
   <h3>Нәтиже: ${is.length?is.length+' ықтимал қате табылды':'қате табылмады'}</h3>
   <p style="white-space:pre-wrap;line-height:2;margin:10px 0">${html}</p>
   <div class="row">${CK.map(c=>`<span class="chip" style="background:${COL[c]}">${D.types[c].n}: ${cnt(c)}</span>`).join('')}</div>
   ${is.length?'':'<p style="color:var(--mut);margin-top:8px">Демо алгоритм тек белгілі үлгілерді тексереді, сондықтан мәтінді мұғалімге де көрсет.</p>'}
  </div>
  ${is.map(x=>`<div class="g iss t-${x.t}"><div class="row">${chip(x.t)}<span><s style="color:var(--no)">${esc(x.w)}</s> → <b style="color:var(--ok)">${esc(x.r)}</b></span></div><p style="margin-top:6px;color:var(--mut)">${esc(x.why)}</p></div>`).join('')}
  ${is.length?`<div class="g"><h3>Түзетілген нұсқа</h3><p style="white-space:pre-wrap;margin:8px 0">${esc(fixed)}</p><div class="row"><button class="btn sm" id="ap">Түзетуді қолдану</button><button class="btn alt sm" id="cp">Көшіру</button></div></div>`:''}`;
  const ap=$('#ap');
  if(ap){
   ap.onclick=()=>{tx.value=fixed;toast('Түзетулер қолданылды');$('#ck').click()};
   $('#cp').onclick=()=>{navigator.clipboard?.writeText(fixed).then(()=>toast('Көшірілді'),()=>toast('Көшіру мүмкін болмады'))};
  }
 };
};

/* ===== ИНТЕРАКТИВТІ ЗЕРТХАНАЛАР ===== */
R.labs=()=>{
 const el=$('#v-labs'),c=labCat,T=D.types[c];
 el.innerHTML=`
 <h2>Интерактивті зертханалар</h2>
 <p class="lead">Әр зертханада түсініктеме, жобадағы қате мен дұрыс нұсқалар және өзін-өзі тексеру тапсырмалары бар.</p>
 <div class="tabs">${CK.map(k=>`<button class="${k==c?'on':''}" data-c="${k}">${D.types[k].full.split(' ')[0]} зертхана${S.lab[k]?' ✓':''}</button>`).join('')}</div>
 <div class="g" style="border-top:6px solid ${COL[c]}"><h3>${T.full} қателіктер</h3><p style="color:var(--mut)">${T.def}</p></div>
 <h3 style="margin:20px 0 10px">Қате → дұрыс (жазба жұмыстан)</h3>
 <div class="grid g2">${T.ex.map(x=>{const[a,b]=diff(x[0],x[1]);return`<div class="pair"><span>${a}</span>→<b>${b}</b></div>`}).join('')}</div>
 ${T.oral.length?`<h3 style="margin:20px 0 10px">Ауызша сөйлеуден мысалдар</h3><div class="grid g2">${T.oral.map(x=>`<div class="pair"><s>${esc(x[0])}</s>→<b>${esc(x[1])}</b></div>`).join('')}</div>`:''}
 <div class="g" style="margin-top:22px">
  <h3>Өзін-өзі тексеру</h3>
  <div id="ss"><p style="color:var(--mut);margin-bottom:12px">${labTasks(c).length} тапсырма. Әр дұрыс жауап — 5 XP.</p><button class="btn" id="sb">Тексеруді бастау</button></div>
 </div>`;
 $$('.tabs button',el).forEach(b=>b.onclick=()=>{labCat=b.dataset.c;R.labs()});
 $('#sb').onclick=()=>session($('#ss'),labTasks(c),(ok,n)=>{
  S.lab[c]=1;
  checkAch();
  $('#ss').innerHTML=`
  <h3>Нәтиже: ${ok}/${n}</h3>
  <div class="bar"><i style="background:${COL[c]};width:${ok/n*100}%"></i></div>
  <p>${ok==n?'Мінсіз! Зертхана аяқталды.':'Қатені қайта қарап, тағы бір рет тапсырып көр.'}</p>
  <br>
  <div class="row"><button class="btn sm" id="rp">Қайталау</button><a class="btn alt sm" href="#game">Ойынға өту</a></div>`;
  $('#rp').onclick=R.labs;
 });
};

/* ===== ҚАТЕ ЭВОЛЮЦИЯСЫ ===== */
const EV=[
 {s:'Мен барады мектепке.',w:'барады',t:'gr',why:'Бастауыш «Мен» — 1-жақ, ал «барады» — 3-жақ. Баяндауыш бастауышпен жағы бойынша үйлесуі керек, әрі сөйлем соңында тұрады.',r:'Мен мектепке барамын.',q:{k:'c',q:'«Сен мектепке ___.»',o:['барамын','барасың','барады'],a:1,why:'«Сен» — 2-жақ: барасың.'}},
 {s:'Ол кітап оқид.',w:'оқид',t:'gr',why:'Баяндауыштың жіктік жалғауы түсіп қалған: оқи + ды.',r:'Ол кітап оқиды.',q:{k:'c',q:'«Ол хат ___.»',o:['жазад','жазады','жазамын'],a:1,why:'3-жақ жалғауы: жазады.'}},
 {s:'Мен жазды хатты досыма.',w:'жазды',t:'gr',why:'Бастауыш «Мен» болғандықтан баяндауыш «жаздым» болады және сөйлем соңына қойылады.',r:'Мен хатты досыма жаздым.',q:{k:'o',q:'Ұқсас тапсырма: сөйлемді құрастыр',a:'Мен фильмді көріп жатырмын.',why:'Баяндауыш соңда.'}},
 {s:'Сіз келді ма сабаққа?',w:'келді ма',t:'gr',why:'«Сіз» — сыпайы 2-жақ: «келдіңіз бе». Баяндауыш сөйлем соңында.',r:'Сіз сабаққа келдіңіз бе?',q:{k:'c',q:'Қайсысы дұрыс?',o:['Сен сабаққа келдің бе?','Сен келді бе сабаққа?','Сен келдің ма сабаққа?'],a:0,why:'«Сен» — келдің бе, баяндауыш соңында.'}},
 {s:'Ол мектепке барды мен үйге қайттым.',w:'барды мен',t:'or',why:'Сөйлемнің екі ойы арасында үтір қойылмаған.',r:'Ол мектепке барды, мен үйге қайттым.',q:{k:'c',q:'Үтір дұрыс қойылған сөйлем қайсы?',o:['Сабақ басталды балалар отырсын','Сабақ басталды, балалар отырсын','Сабақ, басталды балалар отырсын'],a:1,why:'Екі ойдың арасына үтір.'}},
 {s:'Мен кітап үйінде отырмын.',w:'кітап үйінде',t:'lx',why:'«Кітап үйі» — қалыптасқан норма емес, дұрыс атау «кітапхана».',r:'Мен кітапханада отырмын.',q:{k:'c',q:'«Сурет салуышы» орнына:',o:['суретші','сурет үйі','салуыш'],a:0,why:'Дұрыс сөз — суретші.'}},
 {s:'Қызғалақ гүлдеді.',w:'Қызғалақ',t:'ph',why:'«д» дыбысы түсіп қалған; дұрыс айтылуы мен жазылуы — қызғалдақ.',r:'Қызғалдақ гүлдеді.',q:{k:'t',q:'Түзет: «ктапты»',a:'кітапты',why:'«і» дыбысын түсірмеу керек.'}}
];

R.evolution=()=>{
 const el=$('#v-evolution');
 el.innerHTML=`
 <h2>Қате эволюциясы</h2>
 <p class="lead">Қате сөйлемді таңда — жүйе қатені бес кезеңмен талдап көрсетеді.</p>
 <div class="opts" id="el">${EV.map((e,i)=>`<button class="opt" data-i="${i}">${esc(e.s)}</button>`).join('')}</div>
 <div id="es"></div>`;
 $$('#el .opt').forEach(b=>b.onclick=()=>evo(+b.dataset.i));
};

let evoTok=0;

async function evo(i){
 const e=EV[i],tk=++evoTok,box=$('#es'),T=D.types[e.t];
 box.innerHTML='';
 $$('#el .opt').forEach((b,j)=>b.style.borderColor=j==i?'var(--b)':'');
 const st=(n,t,x)=>{
  const d=h('div','g',`<h3>${n}. ${t}</h3>${x}`);
  d.style.cssText='margin-bottom:12px;animation:in .5s';
  box.append(d);
  d.scrollIntoView({behavior:'smooth',block:'nearest'});
  return d;
 };
 const hi=e.s.replace(e.w,`<span class="hl t-${e.t}">${esc(e.w)}</span>`);
 st(1,'Қате сөзді анықтау',`<p style="font-size:20px">${hi}</p>`);
 await sleep(1100);
 if(tk!=evoTok)return;
 st(2,'Қатенің түрі',chip(e.t)+` <b>${T.full}</b> қателік`);
 await sleep(1100);
 if(tk!=evoTok)return;
 st(3,'Неліктен қате?',`<p>${esc(e.why)}</p>`);
 await sleep(1300);
 if(tk!=evoTok)return;
 st(4,'Дұрыс сөйлем',`<p style="font-size:18px"><s style="color:var(--no)">${esc(e.s)}</s></p><p style="font-size:20px;color:var(--ok);font-weight:700">${esc(e.r)}</p>`);
 await sleep(1100);
 if(tk!=evoTok)return;
 const d=st(5,'Ұқсас тапсырма','<div id="et"></div>');
 mount($('#et',d),e.q,ok=>{record(ok,true);if(ok)award(8)});
}

/* ===== ОЙЫН: «Қалқан шайқасы» ===== */
const G={};
function stopGame(){clearInterval(G.tm);clearTimeout(G.to)}

R.game=()=>{
 const el=$('#v-game');
 stopGame();
 el.innerHTML=`
 <h2>Қалқан шайқасы</h2>
 <p class="lead">Қате шар қалқанға жақындап келеді. Уақыт бітпей тұрып дұрыс жауап бер: таңдау, жазу, сөйлем құру, сөздерді сәйкестендіру. Қатарынан дұрыс жауап — комбо!</p>
 <div class="g" id="gb">
  <h3>10 раунд · 3 қалқан</h3>
  <p style="color:var(--mut)">Ең үздік нәтиже: <b>${S.best} XP</b> · Деңгей ${lvl()} (${lvlName()}) · Ойын саны: ${S.games}</p>
  <br>
  <button class="btn" id="gs">Ойынды бастау</button>
 </div>`;
 $('#gs').onclick=gameStart;
};

function gameStart(){
 Object.assign(G,{q:shuf(POOL).slice(0,10),i:0,l:3,cb:0,xp:0,ok:0,mc:0});
 $('#gb').innerHTML=`
 <div class="hud"><span id="hl"></span><span id="hx"></span><span id="hc"></span><span id="hr"></span></div>
 <div class="track"><i id="orb">⚠</i><b>🛡️</b></div>
 <div id="gt"></div>`;
 round();
}

function hud(){
 $('#hl').textContent='🛡️'.repeat(G.l)+'·'.repeat(3-G.l);
 $('#hx').textContent='XP +'+G.xp;
 $('#hc').textContent='Комбо ×'+G.cb;
 $('#hr').textContent='Раунд '+Math.min(G.i+1,10)+'/10';
}

function round(){
 if(G.i>=10||G.l<=0)return gameEnd();
 hud();
 const t=G.q[G.i];
 const dur={c:15,t:45,o:35,m:40}[t.k]*1000;
 const t0=Date.now(),orb=$('#orb');
 orb.style.left='0';
 const ab=mount($('#gt'),t,ok=>{
  clearInterval(G.tm);
  const p=Math.min(1,(Date.now()-t0)/dur);
  if(ok){
   G.cb++;
   G.mc=Math.max(G.mc,G.cb);
   G.ok++;
   const g=10+Math.min(G.cb,5)*2+Math.round((1-p)*5);
   G.xp+=g;
   award(g);
   pop('+'+g+' XP');
   S.maxc=Math.max(S.maxc,G.mc);
  }else{
   G.cb=0;
   G.l--;
   orb.style.left='calc(100% - 44px)';
  }
  record(ok,t.k=='t'||t.k=='o');
  G.i++;
  hud();
  G.to=setTimeout(round,1700);
 });
 G.tm=setInterval(()=>{
  const p=(Date.now()-t0)/dur;
  orb.style.left=`calc(${Math.min(p,1)} * (100% - 44px))`;
  if(p>=1){clearInterval(G.tm);ab()}
 },80);
}

function gameEnd(){
 S.games++;
 S.best=Math.max(S.best,G.xp);
 checkAch();
 const acc=Math.round(G.ok/Math.max(1,G.i)*100);
 $('#gb').innerHTML=`
 <h3>${G.l>0?'🎉 Ойын аяқталды':'💥 Қалқандар бітті'}</h3>
 <div class="grid g3" style="margin:14px 0">
  <div><div class="num">${G.xp}</div><small>XP жиналды</small></div>
  <div><div class="num">${acc}%</div><small>дұрыс жауап</small></div>
  <div><div class="num">×${G.mc}</div><small>ең ұзақ комбо</small></div>
 </div>
 <p>Деңгей ${lvl()} — ${lvlName()}. Барлық XP: ${S.xp}.</p>
 <br>
 <div class="row"><button class="btn" id="ga">Қайта ойнау</button><a class="btn alt" href="#progress">Жетістіктерім</a></div>`;
 $('#ga').onclick=gameStart;
}

/* ===== ЗЕРТТЕУ НӘТИЖЕЛЕРІ ===== */
R.results=()=>{
 const el=$('#v-results'),C=2*Math.PI*60;
 let off=0;
 el.innerHTML=`
 <h2>Ғылыми зерттеу нәтижелері</h2>
 <p class="lead">9-сынып оқушыларының ${D.students}-ы қатысты; жазба жұмыстардан барлығы ${D.total} қате тіркелді. Диаграмманы бас — толық ақпарат ашылады.</p>
 <div class="grid g2">
  <div class="g">
   <h3>Қателердің түрлері</h3>
   <svg class="donut" viewBox="0 0 160 160" style="transform:rotate(-90deg)">
   ${CK.map(c=>{
    const l=D.types[c].c/D.total*C;
    const s=`<circle data-c="${c}" cx="80" cy="80" r="60" fill="none" stroke="${COL[c]}" stroke-width="22" stroke-dasharray="0 ${C}" data-l="${l-2}" stroke-dashoffset="${-off}"><title>${D.types[c].full}</title></circle>`;
    off+=l;
    return s;
   }).join('')}
   </svg>
   <p style="text-align:center;font:800 28px Unbounded;margin-top:-6px">${D.total}</p>
   <div id="di" class="pair" style="margin-top:12px">Бөлікті бас…</div>
  </div>
  <div class="g">
   <h3>Сауалнама (n = ${D.students})</h3>
   <div class="tabs" id="sq">${D.survey.map((s,i)=>`<button data-i="${i}" class="${i?'':'on'}">${i+1}</button>`).join('')}</div>
   <div id="sv"></div>
  </div>
 </div>
 <div class="g" style="margin-top:16px">
  <h3>Үлестердің салыстыруы</h3>
  <div style="overflow-x:auto">
   <table class="tb">
    <tr><th>Қателік түрі</th><th>Саны</th><th>Жұмыстағы %</th><th>Санынан есептелген %</th></tr>
    ${CK.map(c=>`<tr><td>${chip(c)} ${D.types[c].full}</td><td>${D.types[c].c}</td><td>${D.types[c].p}%</td><td>${pct(D.types[c].c,D.total)}%</td></tr>`).join('')}
    <tr><td><b>Барлығы</b></td><td><b>${D.total}</b></td><td><b>${CK.reduce((s,c)=>s+D.types[c].p,0)}%</b> (+${D.other}% «басқа»)</td><td><b>100%</b></td></tr>
   </table>
  </div>
  <div class="warn" style="margin-top:12px">⚠️ <b>Сәйкессіздік:</b> Кесте-5 бойынша ${D.total} қате төрт түрге толық бөлінген (12+18+28+20), ал жұмыстағы пайыздар 34+24+22+15 = 95% береді, қалған 5% — «басқа қателіктер» (мәтінде көрсетілген, бірақ санға енбеген). Сондықтан ${D.total}-ге шаққанда үлестер 35,9 / 25,6 / 23,1 / 15,4% болады. Сайтта жұмыстағы мәндер сақталды; қорғау алдында бір есептеу тәсілін таңдап, түсініктеме беруді ұсынамын.</div>
 </div>
 <h3 style="margin:24px 0 10px">Қателердің себептері</h3>
 <div class="grid g3">${D.causes.map(c=>`<div class="g"><span style="font-size:30px">${c[0]}</span><h3>${c[1]}</h3><p style="color:var(--mut);font-size:14px">${c[2]}</p></div>`).join('')}</div>
 <h3 style="margin:24px 0 10px">Жоба ұсынатын шешу жолдары</h3>
 <div class="grid g3">${D.sol.map(c=>`<div class="pair"><span style="font-size:22px">${c[0]}</span>${c[1]}</div>`).join('')}</div>`;
 setTimeout(()=>$$('.donut circle').forEach(c=>c.setAttribute('stroke-dasharray',c.dataset.l+' '+C)),80);
 const info=c=>{
  const T=D.types[c];
  $$('.donut circle').forEach(x=>x.classList.toggle('sel',x.dataset.c==c));
  $('#di').innerHTML=`<span style="flex:1">${chip(c)} <b>${T.c} қате</b> · жұмыста ${T.p}% · санынан ${pct(T.c,D.total)}%</span><button class="btn sm">Мысалдар</button>`;
  $('#di button').onclick=()=>{mapSel=c;go('map')};
 };
 $$('.donut circle').forEach(x=>x.onclick=()=>info(x.dataset.c));
 const sv=i=>{
  const s=D.survey[i];
  $$('#sq button').forEach((b,j)=>b.classList.toggle('on',j==i));
  $('#sv').innerHTML=`<p><b>${esc(s.q)}</b></p><br>`+s.o.map((o,j)=>`<div data-j="${j}" style="cursor:pointer"><span>${o[0]}</span><b style="float:right">${o[1]} оқушы · ${o[1]/D.students*100}%</b><div class="bar"><i data-w="${o[1]/D.students*100}" style="background:linear-gradient(90deg,var(--a),${['var(--c)','var(--p)','var(--b)'][j]})"></i></div></div>`).join('')+'<p id="sn" style="color:var(--mut);font-size:14px">Жолақты бас…</p>';
  setTimeout(()=>$$('#sv .bar i').forEach(b=>b.style.width=b.dataset.w+'%'),50);
  $$('#sv [data-j]').forEach(d=>d.onclick=()=>{
   const o=s.o[+d.dataset.j];
   $('#sn').innerHTML=`<b>«${o[0]}»</b> деп жауап бергендер: ${o[1]} оқушы, яғни ${D.students} оқушының ${o[1]/D.students*100}%-ы.`;
  });
 };
 $$('#sq button').forEach(b=>b.onclick=()=>sv(+b.dataset.i));
 sv(0);
};

/* ===== ИНТЕРАКТИВТІ ҚАТЕ КАРТАСЫ ===== */
R.map=()=>{
 const el=$('#v-map');
 const pos={gr:[8,14],or:[56,8],lx:[20,52],ph:[62,50]};
 el.innerHTML=`
 <h2>Интерактивті қате картасы</h2>
 <p class="lead">Көпіршіктің көлемі қателер санына тең. Түрін бас — жұмыстағы мысалдар ашылады.</p>
 <div class="bub">
  ${CK.map(c=>{
   const d=Math.round(Math.sqrt(D.types[c].c)*44);
   return`<button data-c="${c}" style="width:${d}px;height:${d}px;left:${pos[c][0]}%;top:${pos[c][1]}%;background:radial-gradient(circle at 30% 25%,#fff8,${COL[c]} 55%);animation-delay:-${pos[c][0]/9}s">${D.types[c].n}<br>${D.types[c].c}</button>`;
  }).join('')}
  <button class="gh" data-c="x" style="width:90px;height:90px;left:42%;top:70%">Басқа<br>${D.other}%</button>
 </div>
 <div id="mp" style="margin-top:18px"></div>`;
 const open=c=>{
  $$('.bub button').forEach(b=>b.classList.toggle('sel',b.dataset.c==c));
  const p=$('#mp');
  if(c=='x')return p.innerHTML='<div class="g">«Басқа қателіктер» (стилистік, контекстік) '+D.other+'% </div>';
  const T=D.types[c];
  p.innerHTML=`
  <div class="g" style="border-top:6px solid ${COL[c]}">
   <h3>${T.full} қателер — ${T.c} қате (${T.p}%)</h3>
   <p style="color:var(--mut);margin-bottom:12px">${T.def}</p>
   <div class="grid g2">${T.ex.map(x=>{const[a,b]=diff(x[0],x[1]);return`<div class="pair"><span>${a}</span>→<b>${b}</b>${x[2]?' <small title="Мұғаліммен тексеру ұсынылады">⚠️</small>':''}</div>`}).join('')}</div>
   <p style="color:var(--mut);font-size:13px;margin-top:10px">Жұмыстағы кестеде ${T.c} қатенің ${T.ex.length} мысалы келтірілген.${c=='or'?' ⚠️ — «Менің атым, Арман» және «Қала, өте әдемі» үлгілері лингвистикалық тұрғыдан даулы болуы мүмкін, мұғаліммен тексеріңіз.':''}</p>
   <br>
   <button class="btn sm" id="ml">Осы бағытта жаттығу</button>
  </div>`;
  $('#ml').onclick=()=>{labCat=c;go('labs')};
  p.scrollIntoView({behavior:'smooth',block:'nearest'});
 };
 $$('.bub button').forEach(b=>b.onclick=()=>open(b.dataset.c));
 open(mapSel);
};

/* ===== ПРОГРЕСС ЖӘНЕ ЖЕТІСТІКТЕР ===== */
R.progress=()=>{
 const el=$('#v-progress'),acc=S.done?Math.round(S.ok/S.done*100):0,C=2*Math.PI*54,pr=(S.xp%100)/100;
 el.innerHTML=`
 <h2>Прогресс және жетістіктер</h2>
 <p class="lead">Нәтиже осы құрылғының жадында (LocalStorage) сақталады.</p>
 <div class="grid g2">
  <div class="g row" style="gap:20px">
   <svg class="ring" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(124,58,237,.18)" stroke-width="10"/>
    <circle cx="60" cy="60" r="54" fill="none" stroke="var(--b)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C*pr} ${C}" style="transition:1s"/>
   </svg>
   <div><div class="num">${lvl()}</div><b>${lvlName()}</b><br><small style="color:var(--mut)">келесі деңгейге ${100-S.xp%100} XP</small></div>
  </div>
  <div class="g grid" style="grid-template-columns:1fr 1fr">
   ${[['Жиналған XP',S.xp],['Орындалған тапсырма',S.done],['Дұрыс жауап',acc+'%'],['Түзетілген қате',S.fixed]].map(x=>`<div><div class="num" style="font-size:30px">${x[1]}</div><small>${x[0]}</small></div>`).join('')}
  </div>
 </div>
 ${S.prof?`<div class="g" style="margin-top:16px"><h3>Соңғы тілдік профиль</h3>${radar(S.prof)}</div>`:`<div class="g" style="margin-top:16px"><p>Тілдік профиль әлі жасалмаған. <a href="#profile">Диагностиканы тапсыр</a>.</p></div>`}
 <h3 style="margin:24px 0 10px">Жетістіктер (${Object.keys(S.ach).length}/${ACH.length})</h3>
 <div class="grid g3">${ACH.map((a,i)=>`<div class="g ach ${S.ach[i]?'on':''}"><span>${a[0]}</span><b style="display:block">${a[1]}</b><small>${a[2]}</small></div>`).join('')}</div>
 <br>
 <button class="btn alt sm" id="rs">Прогресті тазалау</button>`;
 $('#rs').onclick=()=>{
  if(confirm('Барлық прогресс өшіріледі. Жалғастыру керек пе?')){
   S={xp:0,done:0,ok:0,fixed:0,prof:null,det:0,ach:{},best:0,maxc:0,games:0,lab:{}};
   save();
   R.progress();
  }
 };
};

show();
