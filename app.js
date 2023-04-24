const fs = require('fs');
const fsp = fs.promises;


console.log('run');

const test = async () => {
    const data = await fsp.readFile(`${__dirname}/public/text.txt`, 'utf-8');
    const textB = 'Ще додаткоі лемури!';

    await fsp.writeFile(`${__dirname}/public/text.txt`, textB);

    console.log('data:', data, 'textB:', textB);


}
test();