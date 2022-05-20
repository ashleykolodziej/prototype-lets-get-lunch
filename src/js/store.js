
import { createStore } from 'framework7';

const store = createStore({
  state: {
	favorites: [{
		restaruantId: '100489',
		dishId: 1,
		dishName: 'Crispy Fried Tofu Taco',
		dishLocation: 'Taco Party',
		dishImg: 'https://www.tacopartytruck.com/tacopress/wp-content/uploads/2016/11/taco_tofu-600x600.png'
	},
	{
		restaruantId: '100489',
		dishId: 2,
		dishName: 'Torta',
		dishLocation: 'Taco Party',
		dishImg: 'https://www.tacopartytruck.com/tacopress/wp-content/uploads/2016/11/torta-600x600.png'
	}],
    plans: [{
			id: '1',
			title: 'Lunch in Boston',
			date: "Wednesday, May 22nd 2022",
			organizer: {
				name: {
					first: 'Ashley',
					last: 'Kolodziej'
				},
				img: 'https://randomuser.me/api/portraits/women/73.jpg'
			},
			attendees: [
				'https://via.placeholder.com/50x50',
				'https://randomuser.me/api/portraits/women/73.jpg',
				'https://randomuser.me/api/portraits/women/80.jpg',
			]
		},
		{
			id: '2',
			title: 'Draaaaaanks',
			date: 'Undecided',
			organizer: {
				name: {
					first: 'Ashley',
					last: 'Kolodziej'
				},
				img: 'https://randomuser.me/api/portraits/women/73.jpg'
			},
			attendees: [
				'https://via.placeholder.com/50x50',
				'https://randomuser.me/api/portraits/women/73.jpg',
				'https://randomuser.me/api/portraits/women/80.jpg',
				'https://randomuser.me/api/portraits/men/55.jpg',
				'https://randomuser.me/api/portraits/women/22.jpg',
				'https://randomuser.me/api/portraits/men/46.jpg',
				'https://randomuser.me/api/portraits/women/55.jpg',
				'https://randomuser.me/api/portraits/men/10.jpg',
				'https://randomuser.me/api/portraits/men/15.jpg',
			]
		},
		{
			id: '3',
			title: "Jen's B-Day",
			date: 'Undecided',
			organizer: {
				name: {
					first: 'Ashley',
					last: 'Kolodziej'
				},
				img: 'https://randomuser.me/api/portraits/women/73.jpg'
			},
			attendees: [
				'https://via.placeholder.com/50x50',
				'https://randomuser.me/api/portraits/women/73.jpg',
				'https://randomuser.me/api/portraits/women/80.jpg',
				'https://randomuser.me/api/portraits/men/55.jpg',
				'https://randomuser.me/api/portraits/women/22.jpg',
				'https://randomuser.me/api/portraits/men/46.jpg',
				'https://randomuser.me/api/portraits/women/55.jpg',
				'https://randomuser.me/api/portraits/men/10.jpg',
				'https://randomuser.me/api/portraits/men/15.jpg',
				'https://randomuser.me/api/portraits/women/73.jpg',
				'https://randomuser.me/api/portraits/women/80.jpg',
				'https://randomuser.me/api/portraits/men/55.jpg',
				'https://randomuser.me/api/portraits/women/22.jpg',
				'https://randomuser.me/api/portraits/men/46.jpg',
				'https://randomuser.me/api/portraits/women/55.jpg',
				'https://randomuser.me/api/portraits/men/10.jpg',
				'https://randomuser.me/api/portraits/men/15.jpg',
			]
		}],
  },
  getters: {
    favorites({ state }) {
      return state.favorites;
    },
    plans({ state }) {
      return state.plans;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.favorites = [...state.favorites, product];
    },
    addPlan({ state }, plan) {
      state.plans = [...state.plans, plan];
    },
  },
})
export default store;
