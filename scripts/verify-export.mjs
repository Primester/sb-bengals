import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
const root=resolve('out');
const pages=['index.html','about/index.html','programs/index.html','coaches/index.html','safety/index.html','privacy/index.html','registration/index.html','sponsors/index.html','404.html'];
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
const home = readFileSync(join(root, 'index.html'), 'utf8');
if (!home.includes('San Marcos High School')) throw new Error('Home field missing');
const registration = readFileSync(join(root, 'registration/index.html'), 'utf8');
const signupLinks = [...registration.matchAll(/<a [^>]*href="(https:\/\/app\.playmetrics\.com\/signup\?[^"]+)"[^>]*>/g)];
const reviewBuild = process.env.NEXT_PUBLIC_REVIEW_BUILD === 'true';
if (signupLinks.length !== (reviewBuild ? 0 : 2)) {
  throw new Error('The registration page should have two PlayMetrics signup links outside review builds');
}
if (!reviewBuild) {
  const destination = signupLinks[0][1];
  const hasClub = new URL(destination).searchParams.get('clubToken');
  const sameDestinationInNewTabs = signupLinks.every(([link, href]) =>
    href === destination && link.includes('target="_blank"') && link.includes('rel="noopener noreferrer"'));
  if (!hasClub || !sameDestinationInNewTabs) {
    throw new Error('Both signup links should open the same PlayMetrics club page securely in new tabs');
  }
}
if (!registration.includes('<strong>$495</strong>') ||
    !registration.includes('two or more teams in each division') ||
    registration.includes('https://docs.google.com/forms/')) {
  throw new Error('The registration page should show the confirmed fee and team goals and use PlayMetrics');
}
if (!home.includes(`href="${base}/registration/"`) || home.includes('https://app.playmetrics.com/signup')) {
  throw new Error('The homepage should direct families to the registration page');
}
console.log(`Verified ${pages.length} exported pages and ${count} local link targets.`);

const filmRoom=readFileSync(join(root,'filmroom/index.html'),'utf8');
if(!filmRoom.includes('https://eleven-u-film-room.vernon-compa-5167.chatgpt.site/')||!filmRoom.includes('<iframe'))throw new Error('Film room embed is missing');
if(/Bengals|sb-mark|wordmark/i.test(filmRoom))throw new Error('Film room wrapper must be unbranded');
if(readFileSync(join(root,'index.html'),'utf8').includes('href="/filmroom'))throw new Error('Film room must not appear in main-site navigation');
console.log('Verified unbranded /filmroom wrapper and absence from team navigation.');
