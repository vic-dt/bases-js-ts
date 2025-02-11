// console.log('inicio');

import { Heros } from "../data/heroum";
import { obtineHeroPerId } from "./07-imp-exp"

// new Promise((resolve, reject)=> {
//     console.log('cuerpo de la promesa');
    

//     setTimeout(()=>{
//         resolve('Mi amigo cumplió');

//         reject('Mi amigo se largó');

//     }, 1000)

// }).then(nuntius => console.log(nuntius))
// .catch( errorNuntius => console.log(errorNuntius))
// .finally(()=>console.log('fin de la promesa'));

// console.log ('fin');


const  obtineHerosPerIdAsync = (id:number): Promise<Heros> =>{

return new Promise((resolve, reject)=> {

    setTimeout(()=>{
         const heros= obtineHeroPerId(id);

        // if(heros){
        //     resolve(heros as Heros)
        // } else{
        //     reject('El héroe con id: ${id} no ha sido encontrado')
        // }

        heros ? resolve(heros as Heros) : rejectreject('El héroe con id: ${id} no ha sido encontrado');
    }, 1500);
})
}

obtineHerosPerIdAsync(3)
.then(heros=> console.log('el nombre es ${ heros.nomen }'))
.catch(nuntius=> console.log(nuntius))