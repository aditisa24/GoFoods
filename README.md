# GoFoods - Food Ordering Application

GoFoods is a full-stack food ordering application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to sign up, log in, browse food items, add or remove items from their cart, and securely log out. The app is live on [GoFoods](https://gofoods-4n6u.onrender.com/).

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Performance Note](#performance-note)


## Overview

GoFoods provides a seamless food ordering experience. Users can easily navigate through the menu, customize their orders, and manage their cart. Built on a robust MERN stack, the app ensures secure user authentication and efficient data handling.

## Features

- **User Authentication:** Secure sign up and login with hashed passwords (bcrypt) and JWT-based token authentication.
- **Dynamic Food Menu:** Browse and select from a variety of food items.
- **Cart Management:** Add, remove, and review food items in your cart before checkout.
- **Responsive Design:** Optimized for both desktop and mobile viewing.
- **Live Deployment:** The application is hosted on Render and is accessible at [GoFoods](https://gofoods-4n6u.onrender.com/).

## Technologies

- **Frontend:** React, React Router, CSS/Bootstrap for styling
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT), bcrypt
- **Deployment:** Render (free hosting service)

## Installation

### Prerequisites

- Node.js (v12 or later)
- npm or yarn
- MongoDB (local or cloud instance)

### Clone the Repository

```bash
git clone https://github.com/aditisa24/GoFoods.git
cd gofoods
cd my-app
cd Backend
```
##### For Starting the server
```bash
npm install
node index.js
```
#### For UI
```bash
cd frontend
npm install
npm start
```

## Usage

Sign Up/Login: Create a new account or log in using your existing credentials.
Browse Menu: Explore the list of available food items.
Manage Cart: Add or remove items from your cart as needed.
Checkout: Securely log out after placing your order.

## Deployment

The app is deployed on Render and available at https://gofoods-4n6u.onrender.com/. Due to the limitations of free hosting, the application might take up to a minute to load on the first request (cold start)



## Performance Note


Since the app is hosted on a free service, it may experience a slight delay (up to a minute) during initial load times due to cold start behavior. This is normal and will improve once the app is active.




