### Deployed live at
Link: http://18.136.211.239/

### Tech stack
Hosting: AWS EC2, Nginx

Front end: React, Bulma CSS library

### Run the project

`npm install`

`npm start`

### Features

- Fully mobile responsive
- Displays property data, such as number of bedrooms (or studio), number of bathrooms and square footage
- Displays properties in rows of 3 for desktop. Rows of 2 (tablet), or stacked columns (mobile)
- Users can favorite/unfavourite a property with the clickable heart icon. The favourites are saved to localStorage.
- Heart icon turns red if favourited, default it's gray.
- "View all favorites" button displays just the list of favorite properties. Users can also unfavorite in the popup.

### Assumptions

- `id` field in the property object is unique and static for each property listing. As the key in localStorage is `id`.
