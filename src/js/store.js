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
   currentLocation: [{
		"location": {
			"accepts_tips_in_store": true,
			"accepts_tips_on_delivery": true,
			"accepts_tips_on_pickup": true,
			"additional_hours_text": null,
			"categories": [
				46
			],
			"category_names": [
				"Other"
			],
			"curbside_pickup_instructions": null,
			"delivery_fee_amount": null,
			"delivery_menu_url": "https://api.thelevelup.com/v15/order_ahead/menus/42811293?fulfillment_type=delivery",
			"delivery_minimum_amount": 0,
			"delivery_time_estimate_in_minutes": null,
			"extended_address": null,
			"facebook_url": null,
			"fulfillment_types": [
				"delivery",
				"pickup"
			],
			"hours": "Store Hours:\nMon-Tue: Closed\nWed-Thu: 11:00am - 7:45pm\nFri-Sat: 11:00am - 8:30pm\nSun: 11:00am - 7:45pm\n\nDelivery Hours:\nWed-Thu: 11:00am - 7:45pm\nFri-Sat: 11:00am - 8:30pm\nSun: 11:00am - 7:45pm\n\nPickup Hours:\nMon: 11:00am - 7:45pm\nWed-Thu: 11:00am - 7:45pm\nFri-Sat: 11:00am - 8:30pm\nSun: 11:00am - 7:45pm",
			"id": '100489',
			"image_url": null,
			"in_store_menu_url": null,
			"latitude": 42.441178,
			"locality": "Melrose",
			"location_attributes": {},
			"longitude": -71.06816,
			"menu_url": null,
			"merchant_id": 410569,
			"merchant_description_html": "",
			"merchant_description": null,
			"merchant_name": "oceansushi",
			"merchant_tip_preference": "no preference",
			"name": "Taco Party",
			"nearby_location_count": null,
			"newsletter_url": null,
			"open_state": "open",
			"open_state_display": "open",
			"opentable_url": null,
			"phone": "(781) 388-9000",
			"pickup_instructions": null,
			"pickup_menu_url": "https://api.thelevelup.com/v15/order_ahead/menus/42811293?fulfillment_type=pickup",
			"postal_code": "02176-6107",
			"ready_time_estimate_in_minutes": null,
			"region": "MA",
			"street_address": "16 Oak Grove Ave",
			"time_zone": "America/New_York",
			"twitter_url": null,
			"updated_at": "2022-05-20T04:36:13-04:00",
			"yelp_url": null,
			"shown": true,
			"supports_curbside_pickup": false,
			"supports_scheduling": true
		}
	},],
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
			title: 'Lunch in Ball Square',
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
			title: 'Draaaaaanks in Boston',
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
			title: "Jen's B-Day in Lake Ann",
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
    },
    currentLocation({ state }) {
      return state.currentLocation;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.favorites = [...state.favorites, product];
    },
    addPlan({ state }, plan) {
      state.plans = [...state.plans, plan];
    },
    addLocation({ state }, location) {
      state.currentLocation = [...location];
    },
  },
})
export default store;
