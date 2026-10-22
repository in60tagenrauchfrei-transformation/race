// Erzeugt Freischalt-Codes:  node rauchstop_codes.js 20
function hash(s){let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
const chk=a=>(hash(a+'|rt-zimmermann-2026').toString(36).toUpperCase()+'0000').slice(0,4);
const ch='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';const n=+process.argv[2]||10,seen=new Set();
while(seen.size<n){let a='';for(let i=0;i<4;i++)a+=ch[Math.floor(Math.random()*ch.length)];seen.add(a)}
[...seen].forEach(a=>console.log(`RT-${a}-${chk(a)}`));
