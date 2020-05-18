import { bgRed, white, bold, italic } from './deps.ts';

if (!Deno.args.length) {
  console.error('You need to specify at least one search term as an argument. i.e. deno');
  Deno.exit(1);
}

const url = `https://www.google.com/search?q=${Deno.args[0]}`;
const response = await fetch(url, {
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36'
  },
});

const body = await response.text();
const results = body.match(/<div class=\"r\">([\s\S]*?)<\/h3>/gi);

console.log(bgRed(white("Here are the results:\n"))); 

results?.map(r => {
  let [, link, name ] = (/<div class=\"r\"><a href=\"(.*)\" .*<h3.*>(.*)<\/h3>/gi).exec(r) || [];
  console.log(bgRed(white(`- ${bold(name)} => ${italic(link)}`)) );
});