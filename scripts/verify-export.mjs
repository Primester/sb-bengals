import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
const root=resolve('out');
const pages=['index.html','safety/index.html','privacy/index.html','404.html'];
let count=0;
const base=(process.env.NEXT_PUBLIC_BASE_PATH??'').replace(/\/$/,'');
for(const page of pages){
 const html=readFileSync(join(root,page),'utf8');
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1) throw new Error(`${page} must contain one h1`);
 for(const [,raw] of html.matchAll(/href="([^"]+)"/g)){
  const href=raw.replaceAll('&amp;','&');
  if(!href.startsWith('/')&&!href.startsWith('#'))continue;
  let [pathname,hash]=href.split('#');
  if(pathname&&base){if(!pathname.startsWith(base+'/')) throw new Error(`${page}: unprefixed Pages link ${href}`); pathname=pathname.slice(base.length);}
  let file=pathname?join(root,pathname.endsWith('/')?`${pathname}index.html`:pathname):join(root,page);
  if(!existsSync(file))throw new Error(`${page}: missing target ${href}`);
  if(hash){const target=readFileSync(file,'utf8');if(!target.includes(`id="${decodeURIComponent(hash)}"`))throw new Error(`${page}: missing anchor ${href}`);}
  count++;
 }
 if(process.env.NEXT_PUBLIC_INDEXING_ENABLED!=='true'&&!html.includes('noindex'))throw new Error(`${page} should remain noindex before public launch`);
}
if(!readFileSync(join(root,'index.html'),'utf8').includes('San Marcos High School'))throw new Error('Home field missing');
console.log(`Verified ${pages.length} exported pages and ${count} local link targets.`);
