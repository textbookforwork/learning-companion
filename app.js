/* 共用：導覽、品牌幾何形狀輪廓（Rong 原型的路徑）、表情、角色資料 */
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
/* 六個同學的底形：Figma「色彩與形狀」60 顆幾何形狀的編號（見 projects/V1/設計資產）。tf 是照性格的變形，filt 是磨圓／加毛 */
SH.p8 = { tf: 'rotate(-12)', fig: 8, x0: 1270.72, y0: 18.47, w: 83.00, h: 87.31, fx: 1312.22, fy: 58.63, d: 'M1352.13 65.2695C1351.07 75.1995 1330.16 101.219 1319.64 103.599C1305.94 105.779 1278.8 91.4195 1274.83 77.8495C1270.72 67.6495 1273.97 34.1595 1280.59 27.1395C1286.21 19.5895 1317.78 18.4695 1328.84 25.4195C1339.29 29.5895 1353.72 52.5595 1352.13 65.2695Z' };
SH.p12 = { tf: 'scale(1.12 .74)', filt: 'round', fig: 12, x0: 332.86, y0: 183.31, w: 58.31, h: 64.81, fx: 362.01, fy: 213.12, d: 'M391.029 216.541C391.169 221.771 391.169 233.091 382.889 239.511C375.809 242.561 359.129 248.121 351.849 245.741C341.589 244.081 339.009 235.671 335.569 226.541C333.319 219.461 332.859 208.471 334.969 204.101C338.349 198.471 344.839 185.961 353.239 184.701C363.099 183.311 374.219 191.251 382.099 195.951C387.059 200.191 390.899 209.861 391.029 216.541Z' };
SH.p1 = { tf: 'scale(.9)', shadow: '#4C8BF0', fig: 1, x0: 174.14, y0: 26.88, w: 53.87, h: 60.24, fx: 201.07, fy: 54.59, d: 'M178.3 39.7918C183.53 32.1118 202.86 26.8818 211.73 28.3318C217.29 30.5818 225.56 45.4818 226.75 51.7018C228.01 62.3618 222.58 80.5018 218.22 84.9318C210.67 87.1218 189.09 79.2418 184.39 73.8118C179.03 67.3318 174.14 46.7418 178.3 39.7918Z' };
SH.p33 = { tf: 'scale(1.1 1.02)', filt: 'round', fig: 33, x0: 487.93, y0: 499.01, w: 62.94, h: 59.65, fx: 519.40, fy: 526.45, d: 'M524.929 500.93C532.209 502.39 549.679 519.27 550.409 528.27C550.869 535.88 535.319 553.23 528.299 555.21C521.549 558.66 505.999 553.69 499.379 547.07C493.949 539.66 487.929 528.2 493.289 518.87C497.189 509.47 513.479 499.01 524.929 500.93Z' };
SH.p6 = { tf: 'rotate(-6)', fig: 6, x0: 961.43, y0: 17.61, w: 81.34, h: 79.04, fx: 1002.10, fy: 53.97, d: 'M1011.27 93.14L961.43 96.65L963.48 42.57L987.18 17.61L1023.45 22.51L1042.77 64.94L1011.27 93.14Z' };
SH.p28 = { tf: 'scale(.92 1.15)', fig: 28, x0: 1283.30, y0: 335.76, w: 71.55, h: 71.50, fx: 1319.07, fy: 368.65, d: 'M1291.24 396.66C1289.43 390.53 1286.78 381.01 1283.3 368.13C1296.84 355.59 1306.03 344.8 1310.83 335.76C1321.38 343.08 1335.83 346.48 1354.19 345.95C1354.85 356.9 1354.05 370.18 1351.8 385.81L1325.33 407.26C1310.9 403.02 1299.54 399.48 1291.24 396.66Z' };
function face(kind,k,ink,body){
  const g=7.4*k,R=6.2*k,B='#1A1A1A',W='#fff';
  const L=`stroke="${ink}" stroke-width="${2.6*k}" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const eye=(x,pr=3.1*k,dx=0,dy=0)=>`<circle cx="${x}" cy="0" r="${R}" fill="${W}"/><circle cx="${x+dx}" cy="${dy}" r="${pr}" fill="${B}"/>`;
  const both=f=>f(-g)+f(g);
  const blush='';
  switch(kind){
    case 'curious': return eye(-g,3*k)+eye(g,3.5*k,.5*k)+`<path d="M${g-4.5*k} ${-10*k} Q${g} ${-12.5*k} ${g+4.5*k} ${-10.5*k}" ${L}/><circle cx="${.5*k}" cy="${9*k}" r="${2.3*k}" fill="${ink}"/>`;
    case 'lazy': return both(x=>`<path d="M${x-4.6*k} ${-1*k} Q${x} ${2*k} ${x+4.6*k} ${-1*k}" ${L} stroke-width="${2.6*k}"/>`)+`<ellipse cx="0" cy="${9*k}" rx="${2.6*k}" ry="${2*k}" fill="${ink}"/>`;
    case 'nervous': return both(x=>eye(x,3*k,0,-.3*k))+`<path d="M${-g-4.5*k} ${-8.5*k} L${-g+4*k} ${-10.5*k} M${g+4.5*k} ${-8.5*k} L${g-4*k} ${-10.5*k}" ${L} stroke-width="${2*k}"/><path d="M${-3*k} ${9*k} Q${-1.5*k} ${7.8*k} 0 ${9*k} Q${1.5*k} ${10.2*k} ${3*k} ${9*k}" ${L}/>`+blush;
    case 'warm': { const gg=9*k; return [-gg,gg].map(x=>`<path d="M${x-5*k} ${1.5*k} Q${x} ${-4*k} ${x+5*k} ${1.5*k}" ${L} stroke-width="${2.6*k}"/>`).join('')+`<path d="M${-4.5*k} ${9.5*k} Q0 ${14*k} ${4.5*k} ${9.5*k}" ${L}/>`; }
    case 'sharp': return both(x=>eye(x,3*k,1.6*k,.3*k)+`<rect x="${x-R-1}" y="${-R-1}" width="${2*R+2}" height="${R*.6}" fill="${body}"/>`)+`<path d="M${g-4.5*k} ${-10.5*k} L${g+4.5*k} ${-9*k}" ${L}/><path d="M${-3*k} ${9*k} L${3.5*k} ${8*k}" ${L}/>`+blush;
    case 'bouncy': return both(x=>eye(x,3.4*k))+`<path d="M${-g-4.5*k} ${-9*k} Q${-g} ${-12*k} ${-g+4.5*k} ${-9.5*k} M${g-4.5*k} ${-9.5*k} Q${g} ${-12*k} ${g+4.5*k} ${-9*k}" ${L}/><path d="M${-4.5*k} ${8*k} Q0 ${11.5*k} ${4.5*k} ${8*k}" ${L} stroke-width="${2.4*k}"/>`;
    case 'rong': return both(x=>eye(x));
    case 'mrmen': return both(x=>eye(x,3.6*k))+`<path d="M${-5*k} ${9*k} Q0 ${14*k} ${5*k} ${9*k}" ${L}/>`;
    case 'sumikko': return both(x=>`<circle cx="${x}" cy="0" r="${1.6*k}" fill="${ink}"/>`)+`<path d="M${-2*k} ${7*k} L${2*k} ${7*k}" ${L} stroke-width="${1.6*k}"/>`;
    case 'insideout': return both(x=>eye(x,3.4*k))+`<path d="M${-g-5*k} ${-9*k} L${-g+5*k} ${-7*k} M${g+5*k} ${-9*k} L${g-5*k} ${-7*k}" ${L} stroke-width="${3.2*k}"/>`+`<ellipse cx="0" cy="${10*k}" rx="${5*k}" ry="${3.4*k}" fill="${ink}"/>`;
    case 'dark': return both(x=>eye(x,3*k,0,.5*k))+`<path d="M${-g-5*k} ${-9.5*k} L${-g+5*k} ${-6*k} M${g+5*k} ${-9.5*k} L${g-5*k} ${-6*k}" ${L} stroke-width="${3*k}"/>`+`<path d="M${-5*k} ${10*k} L${4*k} ${8*k}" ${L}/>`;
    case 'rush': return both(x=>eye(x,3.4*k))+`<path d="M${-g-5*k} ${-8*k} L${-g+4*k} ${-11*k} M${g+5*k} ${-8*k} L${g-4*k} ${-11*k}" ${L} stroke-width="${3*k}"/><path d="M${-6*k} ${8*k} Q0 ${15*k} ${6*k} ${8*k}Z" fill="${ink}"/>`;
    case 'shaky': return both(x=>eye(x,1.9*k))+`<path d="M${-g-5*k} ${-7*k} L${-g+5*k} ${-10*k} M${g+5*k} ${-7*k} L${g-5*k} ${-10*k}" ${L}/><path d="M${-4*k} ${9*k} L${-2*k} ${8*k} L0 ${9.5*k} L${2*k} ${8*k} L${4*k} ${9*k}" ${L}/>`;
    case 'cool': return both(x=>eye(x,3*k,0,-.4*k)+`<rect x="${x-R-1}" y="${-R-1}" width="${2*R+2}" height="${R*.95}" fill="${body}"/>`)+`<path d="M${-4*k} ${9*k} L${4*k} ${9*k}" ${L}/>`;
    case 'steady': return both(x=>eye(x,3*k))+`<path d="M${-g-5*k} ${-9*k} L${-g+5*k} ${-9*k} M${g-5*k} ${-9*k} L${g+5*k} ${-9*k}" ${L}/><path d="M${-4*k} ${9*k} L${4*k} ${9*k}" ${L}/>`;
    case 'calm': return both(x=>eye(x,3*k,0,-.4*k)+`<rect x="${x-R-1}" y="${-R-1}" width="${2*R+2}" height="${R*.9}" fill="${body}"/>`)+`<path d="M${-3*k} ${9*k} Q0 ${11*k} ${3*k} ${9*k}" ${L}/>`;
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
  const x0=S.x0||0,y0=S.y0||0,pad=(S.tf||S.filt||S.shadow)?Math.max(S.w,S.h)*.22:0;
  const W=S.w+2*pad,H=S.h+2*pad,sc=box/Math.max(S.w,S.h),k=Math.min(S.w,S.h)/62;
  const ink=S.dark?'#FFFDF6':'#1A1A1A',col=opt.color||S.color||'#ddd';
  const cx=x0+S.w/2,cy=y0+S.h/2,fx=S.fx!==undefined?S.fx:cx,fy=S.fy!==undefined?S.fy:cy;
  const tf=S.tf?`transform="translate(${cx} ${cy}) ${S.tf} translate(${-cx} ${-cy})"`:'';
  const extra=opt.extra?opt.extra(S,k):'';
  const shadow=S.shadow?`<path d="${S.d}" fill="${S.shadow}" opacity=".6" transform="translate(5 4)"/>`:'';
  return `<svg width="${W*sc}" height="${H*sc}" viewBox="${x0-pad} ${y0-pad} ${W} ${H}" overflow="visible" aria-hidden="true"><g ${tf}>${shadow}<path d="${S.d}" fill="${col}" ${S.filt?`filter="url(#${S.filt})"`:''} ${opt.sat!==undefined?`opacity="${opt.sat}"`:''}/>${extra}<g transform="translate(${fx} ${fy})">${face(kind,k,ink,col)}</g></g></svg>`;
}
/* 濾鏡（磨圓、加毛）掛在 body 開頭 */
(function(){const d=document.createElement('div');d.innerHTML='<svg width="0" height="0" style="position:absolute"><defs><filter id="round" x="-20%" y="-20%" width="140%" height="140%"><feMorphology operator="dilate" radius="10"/><feMorphology operator="erode" radius="10"/></filter><filter id="fuzz" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="0.14" numOctaves="2" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs></svg>';document.body.prepend(d.firstChild)})();
/* 六個同學：五大性格（OECD 的五個領域）兩端挑。dims: open 開放、task 任務表現、emo 情緒調節、coop 協作、engage 與人互動；3 高 2 中 1 低 */
const DIMS=[['open','開放'],['task','任務表現'],['emo','情緒調節'],['coop','協作'],['engage','與人互動']];
const ROLES=[
 {id:'curious',tw:'小四 46% 不喜歡數學；Pekrun：覺得有趣的孩子就算不太會也撐得住；興趣 7 到 18 歲一路降',case:'吉伊卡哇的小八：好奇、會講話，把大家帶進麻煩也帶出來',n:'阿奇',pos:'好奇的',end:'開放・高的那端',like:'看到什麼都「咦？」，愛把這個連到那個',one:'咦，為什麼？',how:'換個角度看題目、把這題連到別的東西',bad:'離題、分心，做到一半跑去看別的',need:'2 有趣、3 卡住時換角度',ref:'OECD 開放（好奇、創意）；吉伊卡哇的小八；Keltner 說的敬畏',face:'一眼大一眼小、嘴圓圓的',sh:'p8',col:'#9F91E6',
  dims:{open:3,task:1,emo:2,coop:2,engage:2},hi:['好奇','創意'],lo:['自制','堅持']},
 {id:'lazy',tw:'國際平均只有 24% 不喜歡數學，台灣 46%；Pekrun：無聊的另一種是「已經會了」；兒盟：孩子最不滿意的是空閒時間',case:'Inside Out 2 的阿廢：躺著滑手機，但關鍵時刻接手',n:'麻糬',pos:'懶散的',end:'任務表現・低的那端',like:'能趴就趴、能省力就省力，軟軟黏在椅子上',one:'幹嘛那麼急',how:'找最省力的路、不評價、無聊的時候第一個說出來',bad:'能躺就躺，常常不想做完',need:'5 不被比較、2 有趣（無聊是訊號）',ref:'OECD 任務表現低端（堅持、責任低）；Inside Out 2 的阿廢',face:'半閉眼、嘴一條線',sh:'p12',col:'#FFA5D5',
  dims:{open:2,task:1,emo:3,coop:2,engage:1},hi:['抗壓','樂觀'],lo:['堅持','責任感']},
 {id:'nervous',tw:'15 歲數學焦慮全球第 3；Keltner：焦慮有功能，不是壞事；Pekrun：焦慮直接拉低成績',case:'吉伊卡哇本人、角落小夥伴：膽小的可以當主角，孩子最愛',n:'毛毛',pos:'容易緊張的',end:'情緒調節・低的那端',like:'考試前就毛毛的，怕錯怕考，但怕著也會做',one:'我也好怕⋯⋯',how:'跟你一起怕，然後示範怕著也能做第一步；事前會準備',bad:'常常比你還慌',need:'4 怕的時候、6 有人聽（同病相憐）',ref:'OECD 情緒調節低端（抗壓、情緒控制低）；Inside Out 的憂憂、驚驚；吉伊卡哇本人；角落小夥伴',face:'小瞳孔、抖抖的嘴；身後一層藍色影子：把想問的話壓住了的那一面',sh:'p1',col:'#5FD4EF',
  dims:{open:2,task:3,emo:1,coop:3,engage:1},hi:['責任感','同理'],lo:['抗壓','情緒控制']},
 {id:'warm',tw:'只有 46.7% 覺得同學友善；近半數心理困擾找 AI 傾訴；13 歲女生只有一成非常喜歡上學',case:'Baylor 的激勵者：像同學、會示範自己的挫折，讓人更有信心',n:'暖暖',pos:'體貼的',end:'協作・高的那端',like:'先顧你心情、會聽、不評價',one:'我在',how:'先說「我也錯過」、聽、不評價、拍拍你',bad:'什麼都說沒關係，不敢講重話',need:'5 不被比較、6 有人聽、9 別人怎麼看我',ref:'OECD 協作（同理、信任、合作）；角落小夥伴；Baylor 的激勵者',face:'笑眼、笑嘴',sh:'p33',col:'#F6CD4D',
  dims:{open:2,task:2,emo:2,coop:3,engage:2},hi:['同理','信任'],lo:['主動','堅持己見']},
 {id:'sharp',tw:'陳德懷：學生找同學是為了不用面對老師；Baylor：專家型角色讓人學得多',case:'Taylor：孩子造的想像朋友常常愛指揮、不聽話，孩子照樣愛',n:'芥末',pos:'直接到毒舌的',end:'協作・低的那端',like:'開口前先「嘖」一聲，講的話嗆，但是對的',one:'嘖，第二步就錯了',how:'一句話指出哪裡錯、給答案不給安慰',bad:'毒舌、刺到人；國中要收斂',need:'1 做得到、3 卡住時給答案',ref:'OECD 協作低端（同理低、主動高）；Baylor 的專家；想像朋友研究裡「愛指揮」的朋友',face:'壓眉、嘴歪一邊',sh:'p6',col:'#5FBF8E',
  dims:{open:1,task:3,emo:3,coop:1,engage:2},hi:['自制','主動'],lo:['同理','包容']},
 {id:'bouncy',tw:'Baylor：激勵提升自信；陳德懷的比賽模式；但 79.7% 家長已經在推，國中要收斂',case:'吉伊卡哇的烏薩奇：暴衝、最強、帶頭冒險',n:'蹦蹦',pos:'活潑的',end:'與人互動・高的那端',like:'帶頭、愛比賽、先做再說',one:'走！再來一次！',how:'帶頭試、比賽、做對了大聲慶祝',bad:'急、吵，會把你拖下水',need:'8 推一把、1 做得到',ref:'OECD 與人互動（活力、主動、社交）；陳德懷的比賽；吉伊卡哇的烏薩奇',face:'挑眉、張嘴笑',sh:'p28',col:'#FF9A6B',
  dims:{open:2,task:1,emo:3,coop:2,engage:3},hi:['活力','主動'],lo:['自制','耐心']},
];
/* 另一面（第二色出現的時刻）：性格面向表裡低的那條偶爾冒出來 */
const OTHER={
 curious:{to:'nervous',when:'怕考試',say:'考試像闖關⋯⋯欸，其實我也有點怕。',why:'好奇的人不是不怕，是怕的時候還是想知道'},
 lazy:{to:'bouncy',when:'做對了',say:'欸！這個有趣，再來一題！（突然坐起來）',why:'懶是省力，不是沒力；真的有興趣就動了'},
 nervous:{to:'curious',when:'卡住',say:'我也不會⋯⋯那、那這題跟昨天那個像不像？',why:'怕會壓住想問的話；壓不住的時候，問出來了'},
 warm:{to:'sharp',when:'被比較',say:'他是他，你是你。然後，第二步你真的算錯了。',why:'體貼不是什麼都說沒關係，該講的還是講'},
 sharp:{to:'warm',when:'怕考試',say:'怕沒有用，把會的先寫完。⋯⋯我在旁邊。',why:'毒舌是講法，不是心；刀子嘴豆腐心'},
 bouncy:{to:'lazy',when:'無聊',say:'比誰先做完！⋯⋯好啦，先趴一下。',why:'衝久了也會累，累了也會攤'},
};
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
