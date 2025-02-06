
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
    facultatem: 'money'
    
}

//console.log(persona.nomen);

const { nomen, aetas, facultatem ='no tiene poder'} = persona;

console.log(nomen, aetas, facultatem);