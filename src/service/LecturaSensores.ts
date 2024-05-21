import axios from "axios";
import { environment } from '../environments/environment';
import type {DatosLectura} from "../types/Lectura";

export default class Lectura {

    async getLectura(fk:number): Promise<DatosLectura[]> {
        try {
            const url = `${environment.apiUrl}lectura/?fkESeccionEquipoSensor=${fk}`;
            const headers = {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Token ${localStorage.token}`
            };
            const response = await axios.get(url, { headers });
            if (response.status !== 200) {
                throw new Error('Error en la solicitud');
            }
            const data = response.data;
            const resultados: DatosLectura[] = data.results.map((item: any) => ({
                id: item.id,
                valor: item.valor,
                fkEtapa: item.fkEtapa,
                fkESeccionEquipoSensor: item.fkESeccionEquipoSensor,
                created_at: item.created_at,
                createdTime_at: item.createdTime_at,
            }));
            return resultados;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}