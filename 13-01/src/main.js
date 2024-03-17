import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter }, // load multiple components for a single route
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // Pass route params as props makes it more reusable
      ],
    },
    { path: '/users', components: { default: UsersList, footer: UsersFooter } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  // linkActiveClass: 'active', // Set css class 'router-link-active' to 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
