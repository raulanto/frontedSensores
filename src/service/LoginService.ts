import axios from 'axios';
import type  DatosLecturaForm  from '@/types/formUsuarioLogin';

export default class Login {

    async postLogin(FormUsuario: DatosLecturaForm[]) {
        try {
            const url = `http://127.0.0.1:8000/api-token-auth/`;

            const response = await axios.post(url, FormUsuario, {
                headers: {
                    'Content-Type': 'multipart/form-data', 
                },
            });
            
            return response.data; 
        } catch (error) {
            return false;
        }
    }
}
