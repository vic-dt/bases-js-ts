const characters: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gotem'];

const [g, v,y,g2,g3 = 'Yamoshi'] = characters;

console.log(g, g3)

const returnArray = () => {
    return [123, 'ABC'];
}
const [ numerus, litterae ] = returnArray();

console.log(numerus)