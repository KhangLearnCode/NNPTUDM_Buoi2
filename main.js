const products = [
  {
    "id": 189,
    "title": "Minimalist White Sport Smartwatch",
    "slug": "minimalist-white-sport-smartwatch",
    "price": 150,
    "description": "Stay connected and track your fitness with this sleek white smartwatch. Features heart rate monitoring, GPS, and a water-resistant design.",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-27T11:46:15.000Z"
    },
    "images": [
      "https://i.imgur.com/3V4VwdP.png"
    ],
    "creationAt": "2026-01-27T16:09:07.000Z",
    "updatedAt": "2026-01-27T16:09:07.000Z"
  },
  {
    "id": 193,
    "title": "Vibrant Purple Cotton Cap",
    "slug": "vibrant-purple-cotton-cap",
    "price": 18,
    "description": "Add a pop of color to your look with this comfortable purple cap made from high-quality cotton fabric.",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://i.imgur.com/UaFWQbU.png"
    ],
    "creationAt": "2026-01-27T16:35:06.000Z",
    "updatedAt": "2026-01-27T16:35:06.000Z"
  },
  {
    "id": 194,
    "title": "Classic Red Sport Cap",
    "slug": "classic-red-sport-cap",
    "price": 18,
    "description": "A bold red cap with an adjustable strap. Durable, breathable, and designed for daily wear.",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://i.imgur.com/hrOcUSp.png"
    ],
    "creationAt": "2026-01-27T16:35:11.000Z",
    "updatedAt": "2026-01-27T16:35:11.000Z"
  },
  {
    "id": 195,
    "title": "Minimalist White T-Shirt",
    "slug": "minimalist-white-t-shirt",
    "price": 25,
    "description": "A crisp, clean white t-shirt made from premium cotton. A staple piece for any minimalist wardrobe.",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://i.imgur.com/A30Jtpr.png"
    ],
    "creationAt": "2026-01-27T16:35:17.000Z",
    "updatedAt": "2026-01-27T16:35:17.000Z"
  },
  {
    "id": 196,
    "title": "Essential Black T-Shirt",
    "slug": "essential-black-t-shirt",
    "price": 25,
    "description": "Classic black t-shirt with a modern fit. Soft to the touch and resistant to multiple washes.",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://i.imgur.com/Yhq2VNz.png"
    ],
    "creationAt": "2026-01-27T16:35:22.000Z",
    "updatedAt": "2026-01-27T16:35:22.000Z"
  },
  {
    "id": 197,
    "title": "Sleek White Wireless Bluetooth Headset",
    "slug": "sleek-white-wireless-bluetooth-headset",
    "price": 130,
    "description": "Experience pure sound with this elegant white wireless headset. Ergonomic design with long-lasting battery life and crystal-clear audio.",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-27T11:46:15.000Z"
    },
    "images": [
      "https://i.imgur.com/rkQ9fs3.png"
    ],
    "creationAt": "2026-01-27T16:37:03.000Z",
    "updatedAt": "2026-01-27T16:37:03.000Z"
  },
  {
    "id": 198,
    "title": "Ocean Blue Waterproof Gym Bag",
    "slug": "ocean-blue-waterproof-gym-bag",
    "price": 40,
    "description": "Keep your gear dry and organized with this durable, waterproof blue gym bag. Features multiple compartments and a comfortable shoulder strap.",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://i.imgur.com/cWXA1TG.png"
    ],
    "creationAt": "2026-01-27T16:37:07.000Z",
    "updatedAt": "2026-01-27T16:37:07.000Z"
  },
  {
    "id": 199,
    "title": "Active Red Waterproof Gym Bag",
    "slug": "active-red-waterproof-gym-bag",
    "price": 40,
    "description": "High-visibility red gym bag made from waterproof material. Perfect for the gym, swimming, or outdoor adventures.",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://i.imgur.com/aMkyLvm.png"
    ],
    "creationAt": "2026-01-27T16:37:13.000Z",
    "updatedAt": "2026-01-27T16:37:13.000Z"
  },
  {
    "id": 200,
    "title": "Sweater",
    "slug": "sweater",
    "price": 50,
    "description": "Test sweater",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T16:44:10.000Z",
    "updatedAt": "2026-01-27T16:44:10.000Z"
  },
  {
    "id": 202,
    "title": "user_1769533275149mm",
    "slug": "user-1769533275149mm",
    "price": 100,
    "description": "Updated description",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2026-01-27T17:01:15.000Z",
    "updatedAt": "2026-01-27T17:01:16.000Z"
  },
  {
    "id": 204,
    "title": "New Product",
    "slug": "new-product",
    "price": 10,
    "description": "A description",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T17:54:55.000Z",
    "updatedAt": "2026-01-27T17:54:55.000Z"
  },
  {
    "id": 210,
    "title": "nmtnfgb",
    "slug": "nmtnfgb",
    "price": 325,
    "description": "drghetghdtdb",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-27T11:46:15.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/tech"
    ],
    "creationAt": "2026-01-27T18:12:31.000Z",
    "updatedAt": "2026-01-27T18:12:31.000Z"
  },
  {
    "id": 211,
    "title": "T-Shirt",
    "slug": "t-shirt",
    "price": 70,
    "description": "A description",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T18:50:45.000Z",
    "updatedAt": "2026-01-27T18:50:45.000Z"
  },
  {
    "id": 212,
    "title": "Skinny Jeans",
    "slug": "skinny-jeans",
    "price": 40,
    "description": "A description",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T18:51:47.000Z",
    "updatedAt": "2026-01-27T18:51:47.000Z"
  },
  {
    "id": 213,
    "title": "Jeans",
    "slug": "jeans",
    "price": 50,
    "description": "A description",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T19:04:23.000Z",
    "updatedAt": "2026-01-27T19:04:23.000Z"
  },
  {
    "id": 214,
    "title": "Shirt",
    "slug": "shirt",
    "price": 50,
    "description": "A description",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T19:07:13.000Z",
    "updatedAt": "2026-01-27T19:07:13.000Z"
  },
  {
    "id": 215,
    "title": "jacket",
    "slug": "jacket",
    "price": 13,
    "description": "red",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T21:34:17.000Z",
    "updatedAt": "2026-01-27T21:34:17.000Z"
  },
  {
    "id": 216,
    "title": "title 1",
    "slug": "title-1",
    "price": 300,
    "description": "lorem",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-27T11:46:15.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T22:41:40.000Z",
    "updatedAt": "2026-01-27T22:41:40.000Z"
  },
  {
    "id": 217,
    "title": "88",
    "slug": "88",
    "price": 99,
    "description": "jhjhh",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-27T11:46:15.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T22:58:48.000Z",
    "updatedAt": "2026-01-27T22:58:48.000Z"
  },
  {
    "id": 218,
    "title": "y",
    "slug": "y",
    "price": 55,
    "description": "hh",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-27T11:46:15.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T22:59:15.000Z",
    "updatedAt": "2026-01-27T22:59:15.000Z"
  },
  {
    "id": 220,
    "title": "aml",
    "slug": "aml",
    "price": 400,
    "description": "lorem",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-27T11:46:15.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-27T23:42:20.000Z",
    "updatedAt": "2026-01-27T23:42:20.000Z"
  },
  {
    "id": 221,
    "title": "amlvv0",
    "slug": "amlvv0",
    "price": 400,
    "description": "lorem",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-27T11:46:15.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T00:11:15.000Z",
    "updatedAt": "2026-01-28T00:12:30.000Z"
  },
  {
    "id": 222,
    "title": "ahmed01",
    "slug": "ahmed01",
    "price": 40,
    "description": "lorem 4",
    "category": {
      "id": 5,
      "name": "Miscellaneous",
      "slug": "miscellaneous",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-27T15:16:02.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T00:13:45.000Z",
    "updatedAt": "2026-01-28T00:18:11.000Z"
  },
  {
    "id": 223,
    "title": "Mất quyền kiểm soát",
    "slug": "mat-quyen-kiem-soat",
    "price": 345,
    "description": "Mất quyền kiểm soát",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T02:32:51.000Z",
    "updatedAt": "2026-01-28T02:32:51.000Z"
  },
  {
    "id": 224,
    "title": "Mất quyền kiểm soát 1",
    "slug": "mat-quyen-kiem-soat-1",
    "price": 101,
    "description": "Sản phẩm Mất quyền kiểm soát số 1",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T02:34:48.000Z",
    "updatedAt": "2026-01-28T02:34:48.000Z"
  },
  {
    "id": 225,
    "title": "Mất quyền kiểm soát 2",
    "slug": "mat-quyen-kiem-soat-2",
    "price": 102,
    "description": "Sản phẩm Mất quyền kiểm soát số 2",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T02:34:57.000Z",
    "updatedAt": "2026-01-28T02:34:57.000Z"
  },
  {
    "id": 226,
    "title": "Mất quyền kiểm soát 3",
    "slug": "mat-quyen-kiem-soat-3",
    "price": 103,
    "description": "Sản phẩm Mất quyền kiểm soát số 3",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T02:35:06.000Z",
    "updatedAt": "2026-01-28T02:35:06.000Z"
  },
  {
    "id": 227,
    "title": "Mất quyền kiểm soát 4",
    "slug": "mat-quyen-kiem-soat-4",
    "price": 104,
    "description": "Sản phẩm Mất quyền kiểm soát số 4",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T02:36:10.000Z",
    "updatedAt": "2026-01-28T02:36:10.000Z"
  },
  {
    "id": 228,
    "title": "Mất quyền kiểm so soát 5",
    "slug": "mat-quyen-kiem-so-soat-5",
    "price": 105,
    "description": "Sản phẩm Mất quyền kiểm soát số 5",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T02:36:19.000Z",
    "updatedAt": "2026-01-28T02:36:19.000Z"
  },
  {
    "id": 229,
    "title": "Mất quyền kiểm soát 6",
    "slug": "mat-quyen-kiem-soat-6",
    "price": 106,
    "description": "Sản phẩm Mất quyền kiểm soát số 6",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T02:36:26.000Z",
    "updatedAt": "2026-01-28T02:36:26.000Z"
  },
  {
    "id": 230,
    "title": "Mất quyền kiểm soát 7",
    "slug": "mat-quyen-kiem-soat-7",
    "price": 107,
    "description": "Sản phẩm Mất quyền kiểm soát số 7",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T02:36:33.000Z",
    "updatedAt": "2026-01-28T02:36:33.000Z"
  },
  {
    "id": 233,
    "title": "شاشه سمارت",
    "slug": "",
    "price": 890,
    "description": "High-capacity external hard drive offering fast data transfer, reliable storage, and secure backup for personal and professional use.",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-27T11:46:15.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T02:55:46.000Z",
    "updatedAt": "2026-01-28T02:55:46.000Z"
  },
  {
    "id": 247,
    "title": "Truth Without Apology",
    "slug": "truth-without-apology",
    "price": 250,
    "description": "Written by a real human",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2026-01-28T06:44:48.000Z",
    "updatedAt": "2026-01-28T06:44:48.000Z"
  },
  {
    "id": 248,
    "title": "Iphone",
    "slug": "iphone",
    "price": 80000,
    "description": "Ios Device",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/tech"
    ],
    "creationAt": "2026-01-28T06:53:09.000Z",
    "updatedAt": "2026-01-28T06:53:09.000Z"
  },
  {
    "id": 249,
    "title": "Software",
    "slug": "software",
    "price": 10,
    "description": "Test Automation tool",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-27T11:46:15.000Z",
      "updatedAt": "2026-01-28T02:54:10.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2026-01-28T07:04:52.000Z",
    "updatedAt": "2026-01-28T07:04:52.000Z"
  }
];

// ========== UTILITY FUNCTIONS ==========

// Format số tiền
function money(n) {
  return '$' + Number(n).toLocaleString();
}

// Cắt ngắn chuỗi
function truncate(s, n = 90) {
  if (!s) return '';
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

// Escape HTML để tránh XSS
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Kiểm tra URL ảnh có hợp lệ không
function isValidImageUrl(url) {
  if (!url) return false;
  
  // Danh sách các URL placeholder không hợp lệ hoặc đã ngừng hoạt động
  const invalidPatterns = [
    'placeimg.com',       // Dịch vụ đã ngừng hoạt động
    'placehold.co',       // Placeholder trống
    'via.placeholder.com', // Có thể không ổn định
    'placeholder.com'     // Các placeholder khác
  ];
  
  return !invalidPatterns.some(pattern => url.includes(pattern));
}

// Lấy ảnh mặc định dựa trên category
function getDefaultImage(category) {
  if (!category || !category.image) {
    return 'https://i.imgur.com/QkIa5tT.jpeg'; // Default fallback
  }
  return category.image;
}

// ========== RENDER TABLE ==========

function renderTable(list) {
  const tbody = document.getElementById('productsBody');
  const loading = document.getElementById('loading');
  
  if (!tbody) return;
  tbody.innerHTML = '';

  list.forEach(p => {
    const tr = document.createElement('tr');

    // Xác định URL ảnh hợp lệ
    let imgSrc;
    if (p.images && p.images[0] && isValidImageUrl(p.images[0])) {
      imgSrc = p.images[0];
    } else {
      // Sử dụng ảnh category làm fallback
      imgSrc = getDefaultImage(p.category);
    }

    tr.innerHTML = `
      <td class="col-id">${p.id}</td>
      <td class="col-title">${escapeHtml(p.title)}</td>
      <td class="col-slug">${escapeHtml(p.slug || '')}</td>
      <td class="col-price">${money(p.price)}</td>
      <td class="col-description">${escapeHtml(truncate(p.description, 120))}</td>
      <td class="col-category">${escapeHtml(p.category?.name || '')}</td>
      <td class="col-image">
        <img 
          src="${imgSrc}" 
          alt="${escapeHtml(p.title)}" 
          loading="lazy"
        />
      </td>
    `;

    // Xử lý lỗi khi ảnh không load được
    const img = tr.querySelector('img');
    if (img) {
      img.addEventListener('error', function() {
        // Fallback khi ảnh lỗi: sử dụng ảnh category hoặc SVG placeholder
        const fallbackUrl = getDefaultImage(p.category);
        if (this.src !== fallbackUrl) {
          this.src = fallbackUrl;
        } else {
          // Nếu ảnh category cũng lỗi, dùng SVG inline
          this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="56" height="48"%3E%3Crect fill="%23e0e0e0" width="56" height="48"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="8"%3ENo Image%3C/text%3E%3C/svg%3E';
        }
      }, { once: true });
    }

    tbody.appendChild(tr);
  });

  // Ẩn loading indicator
  if (loading) loading.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
  renderTable(products);
});