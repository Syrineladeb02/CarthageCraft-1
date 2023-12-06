import pottery from "../images/pottery.jpg";
import jewelry from "../images/jewelry.jpg";

export const artisans = [
  {
    id: 0,
    name: "Syrine Eladeb",
    bio: "A passionate artisan with a love for creating unique handcrafted products.",
    address: "laouina",
    image: "frontend/src/profile.jpg",
    phoneNumber: "26893856",
    email: "syrine@gmail.com",
  },
  {
    
    id: 1,
    name: "rym lara ",
    bio: "A passionate artisan with a love for creating unique handcrafted products.",
    address: "sokra",
    image: "frontend/src/profile.jpg",
    phoneNumber: "96893876",
    email: "rym@gmail.com",},
  {
    id: 2,
    name: "ahmad bacha",
    bio: "A passionate artisan with a love for creating unique handcrafted products.",
    address: "tunis",
    image: "frontend/src/profile.jpg",
    phoneNumber: "26845856",
    email: "ahmad@gmail.com"
  },
  // Add more artisans as needed
];
export const products = [
  {
    id: 0,
    name: "Handmade Pottery",
    description: "Beautiful ceramic pottery handcrafted with care.",
    price: 55,
    qte: 0,
    image: pottery,
    region: "kairouan",
    category:"pottery",
    artisanId: 0, 
    comments: [
      { _id: 1, user: { username: 'User1' }, text: 'Great product!' },
      { _id: 2, user: { username: 'User2' }, text: 'I love it!' },
    ],
  },
  {
    id: 1,
    name: "Artisanal Jewelry",
    description: "One-of-a-kind jewelry pieces that stand out.",
    price: 55,
    qte: 0,
    image:jewelry,
    region:"tatouine",
    category:"jewelry",
    artisanId: 1, 
    comments: [
      { _id: 3, user: { username: 'laila' }, text: 'Amazing craftsmanship!' },
      { _id: 4, user: { username: 'ahmed' }, text: 'Unique designs!' },
    ],
  },
  {
    id: 0,
    name: "Artisanal accessories",
    description: "One-of-a-kind jewelry pieces that stand out.",
    price: 88,
    qte: 0,
    region:"tunis",
    category:"jewelry",
    image:jewelry,
    artisanId: 2, 
    comments: [
      { _id: 3, user: { username: 'laila' }, text: 'Amazing craftsmanship!' },
      { _id: 4, user: { username: 'ahmed' }, text: 'Unique designs!' },
    ],
  },
  // Add more products as needed
];




