//function salutate (nomen: string) {
//    return `Hola ${nomen}`; 
    
//}

function salutate2(nomen: string): string {
    return `Hola ${nomen}`;
}

const salutate = (nomen:string): string => `Hola ${nomen}`

//console.log(salutate2('Fernando'));
//const obtineUsoris = (uid:string): {uid:string, nomen:string} =>  ({
    
//uid: 'ABC-123',
//nomen: 'Tony001'
//})


const obtineUsoris = ( uid:string ) =>  ({
    
        uid: uid,
        nomen: 'Tony001'
    })

//console.log(obtineUsoris('XYZ-456'));

const heroum = [
{
    id:1,
    nomen: 'Batman'
},

{
    id:2,
    nomen: 'superman',
    facultatem: 'superfuerza'
}

];


const heros = heroum.find(item=> item.id===2)

console.log(heros)