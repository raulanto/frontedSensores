
import axios from 'axios';
import { environment } from '@/environments/environment';
import type { DatosLectura } from '@/types/SeccionEquipo';


export default class SeccionEquipo {

    async getSeccionEquipo(): Promise<DatosLectura[]> {
        try {
            const url = `${environment.apiUrl}seccionEquipo`;
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
                fkequipo_nombre: item.fkequipo_nombre,
                descripcion: item.descripcion,
            }));
            return resultados;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}