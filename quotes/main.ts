import { 
  bgCyan, 
  white, 
  bold, 
  italic } from './deps.ts';

const decoder = new TextDecoder("utf-8");

let quotes = null;
try {
  quotes = JSON.parse( decoder.decode( await Deno.readFile('./quotes/quotes.json') ) );
} catch(error) {
  quotes = JSON.parse( decoder.decode( await Deno.readFile('./quotes.json') ) );
}

const rand = quotes[Math.floor(Math.random() * quotes.length)]
console.log( bgCyan(white( `${bold( rand.quote )} (${italic( rand.movie )})` ) ) );
