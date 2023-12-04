// artisanData.js
import pottery from "./images/pottery.jpg";
import jewelry from "./images/jewelry.jpg";

const artisanData = {
  name: "Syrine Eladeb",
  bio: "A passionate artisan with a love for creating unique handcrafted products.",
  phoneNumber: "26893856",
  email: "syrine@gmail.com",
  image: "frontend/src/profile.jpg",
  products: [
    {
      id: 1,
      name: "Handmade Pottery",
      description: "Beautiful ceramic pottery handcrafted with care.",
      price: 25.00,
      image: pottery,
      comments: [
        { _id: 1, user: { username: 'User1' }, text: 'Great product!' },
        { _id: 2, user: { username: 'User2' }, text: 'I love it!' },
      ],
    },
    {
      id: 2,
      name: "Artisanal Jewelry",
      description: "One-of-a-kind jewelry pieces that stand out.",
      price: 70.00,
      image: jewelry,
      comments: [
        { _id: 3, user: { username: 'laila' }, text: 'Amazing craftsmanship!' },
        { _id: 4, user: { username: 'ahmed' }, text: 'Unique designs!' },
      ],
    },
    // Add more products as needed
  ]
};

export default artisanData;

// buyerData.js
const buyerData = {
  name: 'Ryma Smith',
  email: 'rymaSmith@gmail.com',
  address: '123 Rue Nour, Sokra, Ariana',
  // Add other relevant fields
};

export { buyerData };

// mockOrderDetails.js
const mockOrderDetails = {
  orderedProducts: [
    { id: 1, name: 'Handmade Pottery', quantity: 2, price: 25.00 },
    { id: 2, name: 'Artisanal Jewelry', quantity: 1, price: 70.00 },
    // Add more products as needed
  ],
  totalPrice: 120.00,
  deliveryAddress: '123 Rue Nour, Sokra, Ariana',
  paymentInfo: '**** **** **** 1234',
  orderDate: '2023-11-30',
};

export { mockOrderDetails };
