
import axios from 'axios';
import { environment } from '@/environments/environment';
import type { DatosLectura } from '@/types/EquipoModelo';


//? http://127.0.0.1:8000/api/v1/lectura/?fkESeccionEquipoSensor=3
// export function LecturaServices(data: number) {
//     const headers = { 'Content-Type': 'application/json','accept': 'application/json' ,'Authorization':'Token 386fc05a3228b0f4fcab67cb9bca9c0d13cb7c77' };
//     const url = `${environment.apiUrl}equipo`;

//     return new Promise((resolve, reject) => {
//         axios.get(url,{
//             headers: headers,
//         })
//             .then(response => {
//                 resolve(response);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }



export default class Equipos {

    async getEquipo(): Promise<DatosLectura[]> {
        try {
            const url = `${environment.apiUrl}equipo`;
            const headers = {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': 'Token 386fc05a3228b0f4fcab67cb9bca9c0d13cb7c77'
            };
            const response = await axios.get(url, { headers });

            if (response.status !== 200) {
                throw new Error('Error en la solicitud');
            }

            const data = response.data;
            const resultados: DatosLectura[] = data.results.map((item: any) => ({
                id: item.id,
                nombre: item.nombre,
                descripcion: item.descripcion,
                fkplanta_nombre: item.fkplanta_nombre,
                fkproducto_nombre: item.fkproducto_nombre,
            }));

            return resultados;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}