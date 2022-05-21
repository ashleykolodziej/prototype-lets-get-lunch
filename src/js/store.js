import { createStore } from 'framework7';
import tacoPartyImg from '../assets/2021-08-02.jpg'
import tastyMoMoImg from '../assets/2018-07-21.jpg'
import mintImg from '../assets/index.jpg'

const store = createStore({
  state: {
  	currentFriend: [    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Aino",
        "last": "Paavola"
      },
      "location": {
        "street": {
          "number": 9192,
          "name": "Hatanpään Valtatie"
        },
        "city": "Laukaa",
        "state": "Pirkanmaa",
        "country": "Finland",
        "postcode": 52225,
        "coordinates": {
          "latitude": "-5.6445",
          "longitude": "109.4961"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "aino.paavola@example.com",
      "login": {
        "uuid": "0ad5e269-7e2d-4008-b160-223ceed8689c",
        "username": "angrycat220",
        "password": "gramma",
        "salt": "5i2aaIne",
        "md5": "51e93225e7d6084babe8b1150111b6f9",
        "sha1": "800e9510a5e811672c9819aaad633377afaad4d8",
        "sha256": "9b39fe6570699714dfb1c8748f84f980d4b1cefeb998ad4e4a3e9e19ae68f356"
      },
      "dob": {
        "date": "1955-01-20T06:20:22.362Z",
        "age": 67
      },
      "registered": {
        "date": "2015-11-07T05:17:29.585Z",
        "age": 7
      },
      "phone": "09-853-557",
      "cell": "047-026-52-45",
      "id": {
        "name": "HETU",
        "value": "NaNNA506undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/90.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/90.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/90.jpg"
      },
      "nat": "FI"
    }],
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
			date: "Wednesday, May 22nd",
			organizer: {
				name: {
					first: 'Ashley',
					last: 'Kolodziej'
				},
				img: 'https://randomuser.me/api/portraits/women/73.jpg'
			},
			attendance: 'accepted',
			status: 'selection',
			attendees: [
				'https://via.placeholder.com/50x50',
				'https://randomuser.me/api/portraits/women/73.jpg',
				'https://randomuser.me/api/portraits/women/80.jpg',
			],
			restaurants: [
				{
					id: '100489',
					name: 'Taco Party',
					description: 'Taco truck with vegan and gluten-free options.',
					img: tacoPartyImg,
					votes: [
						{
							userId: 2,
							img: 'https://randomuser.me/api/portraits/women/80.jpg',
							count: 5
						},
						{
							userId: 1,
							img: 'https://randomuser.me/api/portraits/women/73.jpg',
							count: 2
						}
					]
				},
				{
					id: '779661',
					name: 'Tasty Mo:Mo',
					description: 'Quick-serve, charity-minded eatery dishing out dumplings with spicy sauces & thali platters.',
					img: tastyMoMoImg,
					votes: [
						{
							userId: 1,
							img: 'https://randomuser.me/api/portraits/women/73.jpg',
							count: 6
						},
						{
							userId: 2,
							img: 'https://randomuser.me/api/portraits/women/80.jpg',
							count: 5
						}
					]
				}
			],
			suggestions: [
				{
					id: '728388',
					name: 'Mint Indian Eatery',
					description: 'Quick-serve, charity-minded eatery dishing out dumplings with spicy sauces & thali platters.',
					img: mintImg,
					recommender: {
						userId: 1,
						img: 'https://randomuser.me/api/portraits/women/73.jpg',
						name: 'Ashley'
					}
				}
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
			attendance: 'invited',
			status: 'selection',
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
			date: 'Saturday, May 28th',
			organizer: {
				name: {
					first: 'Ashley',
					last: 'Kolodziej'
				},
				img: 'https://randomuser.me/api/portraits/women/73.jpg'
			},
			attendance: 'declined',
			status: 'selection',
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
		}]
  },
  getters: {
    favorites({ state }) {
      return state.favorites;
    },
    plans({ state }) {
      return state.plans;
    },
    currentFriend({ state }) {
      return state.currentFriend;
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
