# 🔧 Development Guide - New World Music Tracker

## 🚀 Local Development Setup

### Option 1: Node.js Server (Recommended)

1. **Install Node.js** (if you don't have it):
   - Download from: https://nodejs.org/
   - Install the LTS version

2. **Run the server**:
   ```bash
   node server.js
   ```

3. **Open in browser**:
   - Access: http://localhost:3000

### Option 2: Python Server

1. **Run Python server**:
   ```bash
   python -m http.server 8080
   ```

2. **Open in browser**:
   - Access: http://localhost:8080

### Option 3: PHP Server (XAMPP/WAMP)

1. **Copy the folder** to the web server directory
2. **Access** via browser: http://localhost/nw-music/

## 🔧 Troubleshooting

### CORS Error
- Use a web server (don't open the file directly)
- The Node.js server is already configured for CORS

### Images don't load
- Check if images are in `images/` folder
- Check paths in JavaScript code

### JSON doesn't load
- Check if the file `data/songs.json` exists
- Use browser console (F12) to see errors

## 📁 Project Structure

```
nw music/
├── index.html              # Main page
├── main.js                # JavaScript logic
├── style.css              # CSS styles
├── server.js              # Node.js server (development)
├── data/                  # JSON data
│   ├── songs.json         # Song data
│   └── translations/      # Translation files
│       ├── pt.json        # Portuguese
│       ├── en.json        # English
│       └── es.json        # Spanish
├── images/                # Instrument images
│   ├── guitar.png
│   ├── bass.png
│   ├── drums.png
│   └── flaute.png
├── docs/                  # Documentation
├── .nojekyll              # GitHub Pages config
├── _config.yml            # Jekyll config
└── README.md              # Main documentation
```

## 🧪 Testing Features

### localStorage Testing
1. Open the application
2. Mark some items
3. Reload the page
4. ✅ Items should remain marked

### Export/Import Testing
1. Mark some items
2. Click "Export Progress"
3. Mark different items
4. Click "Import Progress"
5. Select the exported file
6. ✅ Data should return to exported state

### Language Testing
1. Test all 3 languages
2. Reload the page
3. ✅ Language should be maintained

## 🔄 Development Workflow

1. **Make changes** to HTML, CSS, or JavaScript
2. **Test locally** using one of the server options
3. **Check functionality** using the testing guide
4. **Commit changes** to git
5. **Push to GitHub** for automatic deployment

## 📝 Code Standards

- **JavaScript**: ES6+ features, proper error handling
- **CSS**: Mobile-first responsive design
- **HTML**: Semantic structure, accessibility
- **Comments**: Clear explanations for complex logic
- **Error Handling**: Graceful fallbacks for all operations
