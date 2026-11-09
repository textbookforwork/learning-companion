/* 共用：導覽、品牌鵝卵石輪廓（Rong 原型的路徑）、表情、角色資料 */
const PAGES=[['index.html','首頁'],['needs.html','孩子需要什麼'],['cases.html','別人怎麼做'],['roles.html','我們的角色']];
(function nav(){
  const here=decodeURIComponent(location.pathname.split('/').pop()||'index.html');
  const h=document.createElement('header');h.className='nav';
  h.innerHTML=`<div class="wrap"><a class="brand" href="index.html"><span class="mark"></span><span class="t">學習陪伴角色</span></a><nav class="links">${PAGES.slice(1).map(([f,n])=>`<a href="${f}"${here===f?' aria-current="page"':''}>${n}</a>`).join('')}</nav></div>`;
  document.body.prepend(h);
})();

const SH = {
  lime: { w: 165, h: 112, fx: 92, fy: 46, d: 'M10 8 C40 0 140 -4 160 6 C166 30 166 52 160 66 C148 90 132 108 112 108 C92 108 76 92 56 86 C36 80 14 62 6 44 C0 30 2 14 10 8Z' },
  purple: { w: 165, h: 140, fx: 86, fy: 62, d: 'M18 22 C40 6 70 -2 96 2 C124 8 156 12 162 26 C166 38 158 60 150 88 C140 106 126 118 108 124 C90 130 70 140 50 138 C36 136 24 120 14 102 C2 80 -2 40 18 22Z' },
  pink: { w: 144, h: 138, fx: 72, fy: 64, d: 'M35 1 L98 0 L144 41 L130 90 L105 128 L55 138 L9 112 L0 42Z' },
  brown: { w: 125, h: 130, fx: 66, fy: 66, dark: true, d: 'M30 30 C42 10 52 0 68 2 C92 6 120 18 124 36 C128 60 120 84 106 104 C92 120 70 128 46 130 C28 130 20 118 14 100 C6 80 -2 64 4 52 C10 42 22 40 30 30Z' },
  orange: { w: 212, h: 218, fx: 110, fy: 96, d: 'M42 34 C60 4 90 -4 120 4 C150 12 176 24 188 36 C210 54 214 82 210 104 C200 140 150 190 112 214 C80 222 56 200 40 184 C20 164 2 140 0 112 C-2 80 26 60 42 34Z' },
  amber: { w: 183, h: 160, fx: 94, fy: 72, d: 'M10 30 C30 4 90 -2 128 2 C160 6 172 28 182 70 C190 104 176 126 140 146 C110 162 60 160 36 146 C14 134 6 104 2 80 C-2 56 0 42 10 30Z' },
  cyan: { w: 180, h: 176, fx: 94, fy: 78, d: 'M28 20 C46 6 90 0 112 2 C130 4 142 18 152 28 C172 48 182 90 178 120 C176 150 160 166 132 174 C96 182 50 176 20 158 C0 146 -2 126 4 106 C12 80 14 40 28 20Z' },
  green: { w: 104, h: 116, fx: 54, fy: 54, dark: true, d: 'M8 22 C20 4 46 -2 66 6 C88 14 102 32 104 56 C106 80 98 100 78 110 C56 120 30 116 20 98 C8 80 -2 60 0 42 C2 32 4 28 8 22Z' },
};
function face(kind,k,ink,body){
  const g=7.4*k,R=6.2*k,B='#1A1A1A',W='#fff';
  const L=`stroke="${ink}" stroke-width="${2.6*k}" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const eye=(x,pr=3.1*k,dx=0,dy=0)=>`<circle cx="${x}" cy="0" r="${R}" fill="${W}"/><circle cx="${x+dx}" cy="${dy}" r="${pr}" fill="${B}"/>`;
  const both=f=>f(-g)+f(g);
  switch(kind){
    case 'rong': return both(x=>eye(x));
    case 'mrmen': return both(x=>eye(x,3.6*k))+`<path d="M${-5*k} ${9*k} Q0 ${14*k} ${5*k} ${9*k}" ${L}/>`;
    case 'sumikko': return both(x=>`<circle cx="${x}" cy="0" r="${1.6*k}" fill="${ink}"/>`)+`<path d="M${-2*k} ${7*k} L${2*k} ${7*k}" ${L} stroke-width="${1.6*k}"/>`;
    case 'insideout': return both(x=>eye(x,3.4*k))+`<path d="M${-g-5*k} ${-9*k} L${-g+5*k} ${-7*k} M${g+5*k} ${-9*k} L${g-5*k} ${-7*k}" ${L} stroke-width="${3.2*k}"/>`+`<ellipse cx="0" cy="${10*k}" rx="${5*k}" ry="${3.4*k}" fill="${ink}"/>`;
    case 'dark': return both(x=>eye(x,3*k,0,.5*k))+`<path d="M${-g-5*k} ${-9.5*k} L${-g+5*k} ${-6*k} M${g+5*k} ${-9.5*k} L${g-5*k} ${-6*k}" ${L} stroke-width="${3*k}"/>`+`<path d="M${-5*k} ${10*k} L${4*k} ${8*k}" ${L}/>`;
    case 'rush': return both(x=>eye(x,3.4*k))+`<path d="M${-g-5*k} ${-8*k} L${-g+4*k} ${-11*k} M${g+5*k} ${-8*k} L${g-4*k} ${-11*k}" ${L} stroke-width="${3*k}"/><path d="M${-6*k} ${8*k} Q0 ${15*k} ${6*k} ${8*k}Z" fill="${ink}"/>`;
    case 'sharp': return both(x=>eye(x,2.8*k,0,.4*k))+`<path d="M${-g-5*k} ${-10*k} L${-g+5*k} ${-6*k} M${g+5*k} ${-10*k} L${g-5*k} ${-6*k}" ${L} stroke-width="${3.2*k}"/><path d="M${-4*k} ${9*k} L${4*k} ${7*k}" ${L}/>`;
    case 'warm': return both(x=>`<path d="M${x-4.4*k} ${2*k} A${4.4*k} ${4.4*k} 0 0 1 ${x+4.4*k} ${2*k}" ${L}/>`)+`<path d="M${-5*k} ${8*k} Q0 ${12*k} ${5*k} ${8*k}" ${L}/>`;
    case 'shaky': return both(x=>eye(x,1.9*k))+`<path d="M${-g-5*k} ${-7*k} L${-g+5*k} ${-10*k} M${g+5*k} ${-7*k} L${g-5*k} ${-10*k}" ${L}/><path d="M${-4*k} ${9*k} L${-2*k} ${8*k} L0 ${9.5*k} L${2*k} ${8*k} L${4*k} ${9*k}" ${L}/>`;
    case 'cool': return both(x=>eye(x,3*k,0,-.4*k)+`<rect x="${x-R-1}" y="${-R-1}" width="${2*R+2}" height="${R*.95}" fill="${body}"/>`)+`<path d="M${-4*k} ${9*k} L${4*k} ${9*k}" ${L}/>`;
    case 'curious': return eye(-g,3.2*k)+eye(g,3.6*k,.6*k)+`<path d="M${g-5*k} ${-10*k} Q${g} ${-13*k} ${g+5*k} ${-10*k}" ${L}/><circle cx="0" cy="${9.5*k}" r="${2.6*k}" fill="${ink}"/>`;
    case 'steady': return both(x=>eye(x,3*k))+`<path d="M${-g-5*k} ${-9*k} L${-g+5*k} ${-9*k} M${g-5*k} ${-9*k} L${g+5*k} ${-9*k}" ${L}/><path d="M${-4*k} ${9*k} L${4*k} ${9*k}" ${L}/>`;
    case 'calm': return both(x=>eye(x,3*k,0,-.4*k)+`<rect x="${x-R-1}" y="${-R-1}" width="${2*R+2}" height="${R*.9}" fill="${body}"/>`)+`<path d="M${-3*k} ${9*k} Q0 ${11*k} ${3*k} ${9*k}" ${L}/>`;
    case 'lazy': return both(x=>eye(x,3*k,0,-.6*k)+`<rect x="${x-R-1}" y="${-R-1}" width="${2*R+2}" height="${R}" fill="${body}"/>`)+`<path d="M${-5*k} ${9*k} L${5*k} ${9*k}" ${L}/>`;
    case 'nervous': return both(x=>eye(x,1.9*k))+`<path d="M${-g-5*k} ${-7*k} L${-g+5*k} ${-10*k} M${g+5*k} ${-7*k} L${g-5*k} ${-10*k}" ${L}/><path d="M${-4*k} ${9*k} L${-2*k} ${8*k} L0 ${9.5*k} L${2*k} ${8*k} L${4*k} ${9*k}" ${L}/>`;
    case 'bouncy': return both(x=>eye(x,3.4*k))+`<path d="M${-g-5*k} ${-8*k} L${-g+4*k} ${-11*k} M${g+5*k} ${-8*k} L${g-4*k} ${-11*k}" ${L} stroke-width="${3*k}"/><path d="M${-6*k} ${8*k} Q0 ${15*k} ${6*k} ${8*k}Z" fill="${ink}"/>`;
    case 'confused': return both(x=>eye(x,3*k,.4*k))+`<path d="M${-g-5*k} ${-8*k} L${-g+5*k} ${-10*k} M${g-5*k} ${-9*k} Q${g} ${-12*k} ${g+5*k} ${-8*k}" ${L}/>`+`<path d="M${-3*k} ${9*k} Q0 ${7*k} ${3*k} ${9*k}" ${L}/>`;
    case 'scared': return both(x=>eye(x,1.9*k))+`<path d="M${-g-5*k} ${-7*k} L${-g+5*k} ${-10*k} M${g+5*k} ${-7*k} L${g-5*k} ${-10*k}" ${L}/>`+`<path d="M${-4*k} ${9*k} L${-2*k} ${8*k} L0 ${9.5*k} L${2*k} ${8*k} L${4*k} ${9*k}" ${L}/>`;
    case 'bored': return both(x=>eye(x,3*k,0,-.6*k)+`<rect x="${x-R-1}" y="${-R-1}" width="${2*R+2}" height="${R}" fill="${body}"/>`)+`<path d="M${-5*k} ${9*k} L${5*k} ${9*k}" ${L}/>`;
    case 'sad': return both(x=>eye(x,3*k,0,1.4*k))+`<path d="M${-g-5*k} ${-7*k} L${-g+5*k} ${-10*k} M${g+5*k} ${-7*k} L${g-5*k} ${-10*k}" ${L}/>`+`<path d="M${-4*k} ${11*k} Q0 ${8*k} ${4*k} ${11*k}" ${L}/>`;
    case 'happy': return both(x=>`<path d="M${x-4.4*k} ${2*k} A${4.4*k} ${4.4*k} 0 0 1 ${x+4.4*k} ${2*k}" ${L}/>`)+`<path d="M${-5*k} ${8*k} Q0 ${14*k} ${5*k} ${8*k}" ${L}/>`;
    case 'envy': return both(x=>eye(x,3*k,2.6*k,.3*k))+`<path d="M${-g-5*k} ${-10*k} L${-g+5*k} ${-8*k} M${g-5*k} ${-10*k} L${g+5*k} ${-8*k}" ${L}/>`+`<path d="M${-4*k} ${9*k} L${3*k} ${9*k}" ${L}/>`;
    case 'embarrassed': return both(x=>eye(x,3*k,-2.4*k,-.4*k))+`<circle cx="${-g-2*k}" cy="${8*k}" r="${3.2*k}" fill="#FF87C7" opacity=".8"/><circle cx="${g+2*k}" cy="${8*k}" r="${3.2*k}" fill="#FF87C7" opacity=".8"/>`+`<path d="M${-3*k} ${10*k} Q0 ${8.5*k} ${3*k} ${10*k}" ${L}/>`;
  }
  return '';
}
function blob(key,kind,opt={}){
  const S=SH[key],box=opt.box||96;
  const w=box*S.w/Math.max(S.w,S.h),h=w*S.h/S.w,k=Math.min(S.w,S.h)/62;
  const ink=S.dark?'#FFFDF6':'#1A1A1A',col=opt.color||S.color||'#ddd';
  const extra=opt.extra?opt.extra(S,k):'';
  const filt=opt.glow?`style="filter:drop-shadow(0 0 10px ${col})"`:'';
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${S.w} ${S.h}" ${filt} aria-hidden="true"><path d="${S.d}" fill="${col}" ${opt.sat!==undefined?`opacity="${opt.sat}"`:''}/>${extra}<g transform="translate(${S.fx} ${S.fy})">${face(kind,k,ink,col)}</g></svg>`;
}
/* 性格版六個角色 */
/* 六個同學：五大性格（OECD 的五個領域）兩端挑。dims: open 開放、task 任務表現、emo 情緒調節、coop 協作、engage 與人互動；3 高 2 中 1 低 */
const DIMS=[['open','開放'],['task','任務表現'],['emo','情緒調節'],['coop','協作'],['engage','與人互動']];
const ROLES=[
 {id:'curious',n:'阿奇',pos:'好奇的',end:'開放・高的那端',like:'看到什麼都「咦？」，愛把這個連到那個',one:'咦，為什麼？',how:'換個角度看題目、把這題連到別的東西',bad:'離題、分心，做到一半跑去看別的',need:'2 有趣、3 卡住時換角度',ref:'OECD 開放（好奇、創意）；吉伊卡哇的小八；Keltner 說的敬畏',face:'一眼大一眼小、嘴圓圓的',sh:'purple',col:'#7F6CDF',
  dims:{open:3,task:1,emo:2,coop:2,engage:2},hi:['好奇','創意'],lo:['自制','堅持']},
 {id:'lazy',n:'麻糬',pos:'懶散的',end:'任務表現・低的那端',like:'能趴就趴、能省力就省力，軟軟黏在椅子上',one:'幹嘛那麼急',how:'找最省力的路、不評價、無聊的時候第一個說出來',bad:'能躺就躺，常常不想做完',need:'5 不被比較、2 有趣（無聊是訊號）',ref:'OECD 任務表現低端（堅持、責任低）；Inside Out 2 的阿廢',face:'半閉眼、嘴一條線',sh:'pink',col:'#FF87C7',
  dims:{open:2,task:1,emo:3,coop:2,engage:1},hi:['抗壓','樂觀'],lo:['堅持','責任感']},
 {id:'nervous',n:'毛毛',pos:'容易緊張的',end:'情緒調節・低的那端',like:'考試前就毛毛的，怕錯怕考，但怕著也會做',one:'我也好怕⋯⋯',how:'跟你一起怕，然後示範怕著也能做第一步；事前會準備',bad:'常常比你還慌',need:'4 怕的時候、6 有人聽（同病相憐）',ref:'OECD 情緒調節低端（抗壓、情緒控制低）；Inside Out 的憂憂、驚驚；吉伊卡哇本人；角落小夥伴',face:'小瞳孔、抖抖的嘴',sh:'cyan',col:'#03C5E9',
  dims:{open:2,task:3,emo:1,coop:3,engage:1},hi:['責任感','同理'],lo:['抗壓','情緒控制']},
 {id:'warm',n:'暖暖',pos:'體貼的',end:'協作・高的那端',like:'先顧你心情、會聽、不評價',one:'我在',how:'先說「我也錯過」、聽、不評價、拍拍你',bad:'什麼都說沒關係，不敢講重話',need:'5 不被比較、6 有人聽、9 別人怎麼看我',ref:'OECD 協作（同理、信任、合作）；角落小夥伴；Baylor 的激勵者',face:'笑眼、笑嘴',sh:'amber',col:'#F3C11B',
  dims:{open:2,task:2,emo:2,coop:3,engage:2},hi:['同理','信任'],lo:['主動','堅持己見']},
 {id:'sharp',n:'芥末',pos:'直接到毒舌的',end:'協作・低的那端',like:'開口前先「嘖」一聲，講的話嗆，但是對的',one:'嘖，第二步就錯了',how:'一句話指出哪裡錯、給答案不給安慰',bad:'毒舌、刺到人；國中要收斂',need:'1 做得到、3 卡住時給答案',ref:'OECD 協作低端（同理低、主動高）；Baylor 的專家；想像朋友研究裡「愛指揮」的朋友',face:'壓眉、嘴歪一邊',sh:'green',col:'#00A36E',
  dims:{open:1,task:3,emo:3,coop:1,engage:2},hi:['自制','主動'],lo:['同理','包容']},
 {id:'bouncy',n:'蹦蹦',pos:'活潑的',end:'與人互動・高的那端',like:'帶頭、愛比賽、先做再說',one:'走！再來一次！',how:'帶頭試、比賽、做對了大聲慶祝',bad:'急、吵，會把你拖下水',need:'8 推一把、1 做得到',ref:'OECD 與人互動（活力、主動、社交）；陳德懷的比賽；吉伊卡哇的烏薩奇',face:'挑眉、張嘴笑',sh:'orange',col:'#FF854A',
  dims:{open:2,task:1,emo:3,coop:2,engage:3},hi:['活力','主動'],lo:['自制','耐心']},
];
const SITUATIONS=[
 {n:'答錯了',s:'我學得會嗎',r:['咦，你怎麼會想這樣？滿有趣的','錯就錯啊，等等再改','嗚⋯⋯我也常這樣','沒關係，我也錯過這題','嘖，第二步就錯了，回去看','再來一次！']},
 {n:'卡住',s:'我不會，但不想問老師',r:['這題跟昨天那個像不像？','先跳過，做下一題','我也不會⋯⋯那先看題目第一行？','卡住很正常，我陪你看','你漏了一個條件，寫出來','先亂試一個看看']},
 {n:'無聊',s:'這有什麼好玩的',r:['你看這個數字像不像⋯⋯','對啊超無聊，表示你會了，可以不用做','無聊的時候我會開始擔心','休息一下再回來','無聊也要做完','比誰先做完']},
 {n:'怕考試',s:'我好怕錯、怕考',r:['考試像闖關，第一關是什麼？','考就考，又不會死','我比你還怕⋯⋯我們一起深呼吸，先寫會的','怕是正常的，我在','怕沒有用，把會的先寫完','怕什麼，衝']},
 {n:'被比較',s:'在這裡沒人排名',r:['他的做法跟你的哪裡不一樣？','比那個幹嘛','我也常常覺得別人比較好','他是他，你是你','比也沒用，看自己的步驟','那就贏回來']},
 {n:'想講話',s:'我想講，但不要被評',r:['講講講，然後我也有一個','嗯哼（躺著聽）','我也有話想講','我在聽','講重點','走，講給我聽']},
 {n:'做對了',s:'它是我的，我決定',r:['你怎麼想到的？','好，可以休息了','太好了，我剛剛好緊張','你做到了','嗯，對了','耶！下一題！']},
];
const ATT='img/';
