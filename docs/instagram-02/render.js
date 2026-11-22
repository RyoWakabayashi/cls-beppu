const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1});
await p.goto('file://'+__dirname+'/post.html');
await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(500);
const n=await p.locator('.slide').count();
for(let i=1;i<=n;i++) await p.locator('#s'+i).screenshot({path:`${__dirname}/CLS別府_第2回_insta_${String(i).padStart(2,'0')}.png`});
await b.close();})();
