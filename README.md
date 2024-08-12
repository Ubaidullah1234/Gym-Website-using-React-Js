# Gym Website using React.js

This is a responsive Gym Website built using React.js. It includes various sections such as Home, About, Shop, Workouts, Membership, Contact, and detailed Product pages with Cart and Checkout functionalities.

## Features


- **Navigation**: Smooth navigation between different pages using React Router.
- **Product Listing**: Shop page with a list of gym-related products.
- **Product Details**: Detailed view of each product with an option to add to the cart.
- **Cart and Checkout**: Users can view their cart and proceed to checkout.
- **Web3form Contact Form**: Secure contact form powered by Web3form.
- **Dynamic Pages**: Pages like Product Details and Checkout are dynamically rendered based on user interactions.

## Technologies Used

- **Frontend**: React.js, React Router
- **Styling**: CSS3, Flexbox
- **Contact Form**: Web3form integration

## Setup and Installation

To set up the project locally, follow these steps:



1. Navigate to the project directory:
    ```bash
    cd Gym-Website-using-React-Js
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

The website should now be running at `http://localhost:3000`.

## Web3form Integration

The contact form in this project uses [Web3form](https://web3forms.com/) for secure form submissions. Here’s how it’s set up:

1. **Web3form Endpoint**: The contact form submits data to the Web3form endpoint for processing.
2. **Spam Protection**: Built-in spam protection is enabled using a honeypot field.
3. **Success Message**: A success message is shown to users upon successful submission.
