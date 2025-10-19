# 🎵 New World Music Tracker

A web application to track progress in collecting songs and instruments from the New World game.

## 🌐 Online Access

**🔗 [Access the application here](https://your-username.github.io/nw-music/)**

> ⚠️ **Important**: Replace `your-username` with your GitHub username

## 📁 Project Structure

```
nw music/
├── index.html              # Main page
├── main.js                # JavaScript logic
├── style.css              # CSS styles
├── data/                  # JSON data
│   └── songs.json         # List of songs and instruments
├── images/                # Instrument images
│   ├── guitar.png
│   ├── bass.png
│   ├── drums.png
│   └── flaute.png
├── .nojekyll              # GitHub Pages configuration
├── _config.yml            # Jekyll configuration
└── README.md              # This file
```

## 🚀 How to use

1. **Online**: Access the link above
2. **Local**: Open `index.html` directly in the browser (works without server!)
3. Mark collected parts by clicking the checkboxes
4. Track your progress in the counters at the top
5. Use reset and export buttons as needed

> ✅ **Works offline**: The application works even by opening the file directly in the browser!

## 🎯 Features

- ✅ Real-time progress tracking
- ✅ Data persistence in localStorage
- ✅ Responsive and modern interface
- ✅ Export/import system
- ✅ 20 New World songs with instruments

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript ES6+
- LocalStorage API
- GitHub Pages

## ✅ Best Practices Implemented

- **SEO**: Meta tags, favicon, correct lang
- **Performance**: Optimized CSS, font-smoothing
- **Accessibility**: Semantic structure, adequate contrast
- **Responsiveness**: Mobile-first design
- **Error Handling**: Validations and fallbacks
- **Clean Code**: Comments, organized structure
- **GitHub Pages**: Optimized configuration with .nojekyll

## 📦 Deploy to GitHub Pages

1. **Fork** this repository
2. **Enable** GitHub Pages in repository settings
3. **Select** the `main` branch as source
4. **Access** `https://your-username.github.io/nw-music/`

## 🔧 Local Development

For local development, use a web server:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```
