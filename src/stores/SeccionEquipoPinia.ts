import { defineStore } from "pinia";
import SeccionEquipo from "@/service/SeccionEquipoServices";
import type { DatosLectura } from '@/types/SeccionEquipo';

export const useSeccionEquipoStore = defineStore({
    id: 'SeccionEquipo',
    state: () => ({
        isLoading: false,

        datosSeccionEquipo: [] as DatosLectura[],
    }),
    actions: {
        async fetchSeccionEquipos() {
            try {
                const seccionEquipo = new SeccionEquipo();
                const responseData = await seccionEquipo.getSeccionEquipo();
                if (responseData && responseData.length > 0) {
                    this.datosSeccionEquipo = responseData;
                    this.isLoading = true;
                } else {
                    console.error('Datos no Obtenidos');
                    this.datosSeccionEquipo = [];
                    this.isLoading = false;
                }

            } catch (error) {
                console.error(error);
                this.datosSeccionEquipo = [];
            } finally {
                this.isLoading = false;
            }
        }
    }
})