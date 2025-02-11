
interface Heros {
    nomen: string;
    aetas: number;
    codeNomen: string;
    facultatem?: string;

}





export const persona: Heros = {
    nomen: 'Tony',
    aetas: 45,
    codeNomen: 'Ironman',
    //facultatem: 'money'
    
}

//console.log(persona.nomen);

const { nomen, aetas, facultatem ='no tiene poder'} = persona;

console.log(nomen, aetas, facultatem);

//const creareHeros = (args: any)=> ({
//    id: 123123,
  //  nomen: args.nomen,
  //  aetas: args.aetas,
    //codeNomen: args.codeNomen,
    //facultatem: args.facultatem ?? 'No tiene poder'
//})
 
const creareHeros = ({nomen, aetas, codeNomen, facultatem}: Heros)=> ({
    id: 123123,
    nomen,
    aetas,
    codeNomen,
    facultatem: facultatem ?? 'No tiene poder'
})

console.log(creareHeros(persona));