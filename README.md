# Travel Journal
This project was completed during Scrimba's React course taught by Bob Zirroll. The main focus of this project was to learn and practice using props in React.

## Props in React
Props (short for "properties") are a way to pass data from one component to another in React. They allow you to customize and reuse components, making your code more modular and easier to maintain. Props are read-only, which means they cannot be modified by the child component that receives them.

There is a file named data.js in this project, which consists of an array of objects containing data for three different travel destinations. Each object represents a single destination and has the following properties:

- `id`: A unique identifier for the destination.
- `title`: The name of the destination.
- `location`: The location of the destination.
- `googleMapsUrl`: A link to the Google Maps page for the destination.
- `startDate`: The start date of the trip to the destination.
- `endDate`: The end date of the trip to the destination.
- `description`: A brief description of the destination.
- `image`: A link to an image of the destination.

This data was used in this simple React project to display information about each destination, such as its name, location, dates, description, and an image. One can make use of this journal by adding, replacing or removing destinations, and customizing it as they wish.


### Short Note
*This journal is mobile only, I did not make use of media queries. Feel free to modify it so it will adapt better to larger screen sizes.*

## Usage
To run this project, simply clone the repository and run npm start in your terminal. This will start the development server and open the app in your browser.

---
### Author
© 2023 Rafael Oliveira. All rights reserved.

#### I hope this helps! Let me know if you need any further assistance.