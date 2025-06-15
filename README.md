# 🎬 Movie Discovery App

A modern React application for discovering and managing your favorite movies using The Movie Database (TMDb) API.

## ✨ Features

- **Browse Popular Movies**: View trending and popular movies
- **Search Functionality**: Search for movies by title
- **Favorites Management**: Add/remove movies from your personal favorites list
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Persistent Storage**: Favorites are saved locally and persist between sessions
- **Interactive UI**: Smooth hover effects and transitions
- **Fast Loading**: Optimized performance with efficient API calls

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **React Router** - Client-side routing
- **Context API** - State management for favorites
- **CSS3** - Custom styling with modern features
- **TMDb API** - Movie data and poster images
- **Local Storage** - Persistent favorites storage
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **TMDb API key** (free registration at [themoviedb.org](https://www.themoviedb.org/))

## Installation

1. Clone the repository

```bash
git clone https://github.com/Leon-87-7/movieListProject.git
cd movieListProject
```

2. Install dependencies

```bash
npm install
```

3. Set up your API key securely

- Get your free API key from TMDb API
- Create a .env file in the project root:

```bash
VITE_TMDB_API_KEY=your-actual-api-key-here
```

- Important: Never commit your .env file to version control!

4. Start the development server

```bash
npm run dev
```

5. Open your browser
   Navigate to http://localhost:5173 to view the app

## 📁 Project Structure

```
movieProject/
├── public/
├── src/
│   ├── components/
│   │   ├── movieCard.jsx      # Individual movie card component
│   │   └── navBar.jsx         # Navigation bar
│   ├── context/
│   │   └── movieContext.jsx   # Favorites state management
│   ├── css/
│   │   ├── App.css           # Main app styles
│   │   ├── Home.css          # Home page styles
│   │   ├── MovieCard.css     # Movie card styles
│   │   └── index.css         # Global styles
│   ├── pages/
│   │   ├── favorites.jsx     # Favorites page
│   │   └── home.jsx          # Home page
│   ├── services/
│   │   └── api.js            # TMDb API functions
│   ├── App.jsx               # Main app component
│   └── main.jsx              # App entry point
├── package.json
└── README.md
```

## 🎯 Key Components

### MovieCard Component

- Displays movie poster, title, and release year
- Interactive favorite button with heart icon
- Hover effects revealing overlay with controls
- Responsive design for different screen sizes

### Favorites Context

- Global state management for favorite movies
- Persistent storage using localStorage
- Add, remove, and check favorite status functions

### API Service

- Fetches popular movies from TMDb
- Search functionality for finding specific movies
- Proper error handling and loading states

## 🎨 Features in Detail

### Home Page

- Displays popular movies in a responsive grid
- Search bar for finding specific movies
- Loading states and error handling
- Seamless navigation between search results and popular movies

### Favorites Page

- Shows all user-favorited movies
- Persistent across browser sessions
- Same interactive movie cards as home page
- Easy management of favorite collection

### Movie Cards

- High-quality poster images from TMDb
- Smooth hover animations
- One-click favorite toggle
- Clean, modern design

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌟 Future Enhancements

- [ ] Movie detail pages with full information
- [ ] User ratings and reviews
- [ ] Advanced filtering (genre, year, rating)
- [ ] Watchlist functionality
- [ ] Movie trailers integration
- [ ] Dark/light theme toggle
- [ ] Social sharing features

## 🐛 Known Issues

- Search results replace popular movies (could implement tabs)
- No pagination for large result sets
- Limited error messaging for network failures
- API key visible in client-side code
- No movie detail pages yet

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API
- React team for the amazing framework
- Vite team for the fast build tool
- All the open-source contributors who make projects like this possible

## 📧 Contact

Leon - [GitHub Profile](https://github.com/Leon-87-7)

Project Link: [https://github.com/Leon-87-7/myFirstReactProject](https://github.com/Leon-87-7/myFirstReactProject)

---

⭐ Star this repo if you found it helpful!
