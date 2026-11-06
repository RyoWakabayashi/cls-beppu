const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:794,height:1123},deviceScaleFactor:1});
await p.goto('file://'+__dirname+'/flyer.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(500);
await p.pdf({path:__dirname+'/out.pdf',format:'A4',printBackground:true,margin:{top:0,right:0,bottom:0,left:0}});
await p.screenshot({path:__dirname+'/preview.png'});
const p2=await b.newPage({viewport:{width:794,height:1123},deviceScaleFactor:350/96});
await p2.goto('file://'+__dirname+'/flyer.html');await p2.evaluate(()=>document.fonts.ready);await p2.waitForTimeout(500);
await p2.screenshot({path:__dirname+'/out_350dpi.png'});await b.close();})();
