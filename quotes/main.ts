import { 
  bgCyan, 
  white, 
  bold, 
  italic, 
  readJson } from './deps.ts';

let quotes = null;
try {
  quotes = await readJson('./quotes/quotes.json') as any[];
} catch(error) {
  quotes = await readJson('./quotes.json') as any[];
}

const rand = quotes[Math.floor(Math.random() * quotes.length)]
console.log( bgCyan(white( `${bold( rand.quote )} (${italic( rand.movie )})` ) ) );
