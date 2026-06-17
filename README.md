/*
14 - Comente o console.log acima, e,

- Após a const "bestMovie" (abaixo), declare uma constante "realBestMovie";
- Atribua à "realBestMovie" a mesma string da "bestMovie", mas substituindo o nome do filme para "Moonlight";
- Exiba a "realBestMovie" no console.
*/

const bestMovie = 'E o Oscar de melhor filme vai para: "La la land"!'
const realBestMovie = bestMovie.replace('La la land', 'Moonlight')
console.log(realBestMovie)
