import { defineStore } from 'pinia';
import Login from '@/service/LoginService';
import type   DatosLecturaForm  from '@/types/formUsuarioLogin';
import type { DatosLectura } from '@/types/Usuario';
import  router from '@/router';
export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        datosLectura: null as DatosLectura | null, 
    }),

    getters: {
        validacion(): boolean {
            return !!this.datosLectura; //  true si datosLectura no es nulo, de lo contrario, devuelve false
        }
    },

    actions: {
        async postLoginStore(FormUsuario: DatosLecturaForm[]) {
            try {
                const loginService = new Login();
                const response: DatosLectura | false = await loginService.postLogin(FormUsuario);
                
                if (response) {
                    this.datosLectura = response;
                    localStorage.user_id =this.datosLectura.user_id
                    localStorage.token =this.datosLectura.token
                    localStorage.email =this.datosLectura.email
                    localStorage.first_name =this.datosLectura.first_name
                    router.push('home');
                    // console.log('Correcto');
                    // console.log(this.datosLectura.user_id);
                } else {
                    console.log('Error en la solicitud');
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
});
