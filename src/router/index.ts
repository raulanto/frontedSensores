import {createRouter, createWebHistory} from 'vue-router'
import LoginForm from '@/modules/LoginForm.vue'
import DasboradP from '@/views/DasboradP.vue'
import ViewEquipo from '@/layouts/EquipoLyt.vue'
import PanelEquipoLyt from '@/layouts/PanelEquipoLyt.vue'
import SeccionEquipoLyt from '@/layouts/SeccionEquipoLyt.vue'
import OverviewD from '@/layouts/OverviewD.vue';
// Panel equipo


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginForm
        },
        {
            path: '/home/',
            name: 'home',
            component: DasboradP,
            children: [
                {
                    path: "",
                    redirect: "/home/equipo",
                    children: [
                        {
                            path: '/home/equipo/panel',
                            component: PanelEquipoLyt,
                            children: [
                                {
                                    path: "",
                                    redirect: '/home/equipo/panel/seccionEquipo'
                                },
                                {
                                    path: 'seccionEquipo',
                                    component: SeccionEquipoLyt
                                },
                                {
                                    path: 'OverviewD',
                                    component: OverviewD
                                },
                            ]
                        },
                    ]
                },
                {
                    path: 'equipo',
                    component: ViewEquipo
                },
                // {
                //   path: 'overview',
                //   component: OverviewD
                // },
            ]
        },
    ]
})

export default router
