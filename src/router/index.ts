import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// import i18n from '../i18n';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		component: () => import('../views/Main.vue'),
		children: [
			{
				path: '/users',
				name: 'Table',
				component: () => import('../views/Users.vue')
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
