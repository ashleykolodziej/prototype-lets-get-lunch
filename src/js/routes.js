import HomePage from '../pages/home.f7';
import FriendsPage from '../pages/friends.f7';
import FriendPage from '../pages/friend.f7';
import PlanListingPage from '../pages/planlisting.f7';
import FormPage from '../pages/form.f7';
import FavoritesPage from '../pages/favorites.f7';
import PlanPage from '../pages/plan.f7';
import NewPlan from '../pages/newplan.f7';
import BrowsePage from '../pages/browse.f7';
import ConfirmLikes from '../pages/confirmlikes.f7';
import VotePage from '../pages/vote.f7';
import ConfirmedPage from '../pages/confirmation.f7';
import MenuPage from '../pages/menu.f7';
import SettingsPage from '../pages/settings.f7';

import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

var routes = [
  /*{
    path: '/',
    component: HomePage,
    on: {
     pageInit: function (e, page) {
       //pickit(page);
     },
   }
  },*/
  {
    path: '/plans/',
    //path: '/',
    component: PlanListingPage,
  },
  {
    path: '/friends/',
    component: FriendsPage,
  },
  {
    path: '/friends/:id/',
    component: FriendPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/favorites/',
    component: FavoritesPage,
  },
  {
    path: '/plans/:id/',
    component: PlanPage,
  },
  {
    path: '/plans/:id/browse/',
    component: BrowsePage,
  },
  {
    path: '/plans/:id/likes/',
    component: ConfirmLikes,
  },
  {
    path: '/plans/:id/vote/',
    component: VotePage,
  },
  {
    path: '/plans/:id/confirmed/',
    component: ConfirmedPage,
  },
  {
    path: '/menu/:id/',
    component: MenuPage
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '/newplan/',
    component: NewPlan,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
