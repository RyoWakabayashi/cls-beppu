const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [cls,h,suf] of [['pt',1350,'4x5'],['sq',1080,'1x1']]){
  const p=await b.newPage({viewport:{width:1080,height:h},deviceScaleFactor:1});
  await p.goto('file://'+__dirname+'/post.html');
  await p.evaluate(c=>document.querySelectorAll('.slide').forEach(s=>s.classList.add(c)),cls);
  await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(500);
  for(const id of ['s1','s2']) await p.locator('#'+id).screenshot({path:`${__dirname}/CLS別府_第2回_insta_${id==='s1'?'1':'2'}_${suf}.png`});
}
await b.close();})();
