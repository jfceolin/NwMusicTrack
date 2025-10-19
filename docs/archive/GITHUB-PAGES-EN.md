# 🚀 Deploy to GitHub Pages

## 📋 Step by Step

### 1. Create Repository on GitHub

1. **Access** [GitHub](https://github.com)
2. **Click** "New repository"
3. **Name**: `nw-music` (or any name)
4. **Check** "Public" (required for free GitHub Pages)
5. **Click** "Create repository"

### 2. Upload Files

#### Option A: Via GitHub Web Interface
1. **Access** the created repository
2. **Click** "uploading an existing file"
3. **Drag** all files from the project folder
4. **Commit** with message: "Initial commit"

#### Option B: Via Git (Recommended)
```bash
# Initialize git
git init

# Add files
git add .

# Initial commit
git commit -m "Initial commit: New World Music Tracker"

# Add remote
git remote add origin https://github.com/YOUR-USERNAME/nw-music.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. **Access** the repository on GitHub
2. **Click** the "Settings" tab
3. **Scroll** to "Pages" (left side)
4. **Source**: "Deploy from a branch"
5. **Branch**: "main"
6. **Folder**: "/ (root)"
7. **Click** "Save"

### 4. Access the Site

- **URL**: `https://YOUR-USERNAME.github.io/nw-music/`
- **Time**: 5-10 minutes to become available

## 🔧 Important Files

### ✅ Required Files in Root:
- `index.html` - Main page
- `main.js` - JavaScript
- `style.css` - Styles
- `data/songs.json` - Song data
- `images/` - Images folder
- `.nojekyll` - Disables Jekyll
- `_config.yml` - Configuration

### ❌ Files that should NOT go to GitHub Pages:
- `server.js` - Local server
- `package.json` - Node.js dependencies
- `src/` - Development folder
- `assets/` - Development folder
- `docs/` - Local documentation

## 🐛 Troubleshooting

### Site doesn't load
- Check if all files are in the root
- Confirm if GitHub Pages is enabled
- Wait a few minutes for propagation

### Images don't appear
- Check if the `images/` folder is in the root
- Confirm if paths in `main.js` are correct

### JSON doesn't load
- Check if `data/songs.json` is in the root
- Confirm if the file is well formatted

### 404 Error
- Check if `index.html` is in the repository root
- Confirm if the repository name is correct in the URL

## 📱 Local Testing

To test before deployment:

```bash
# Use local server
python -m http.server 8000
# Access: http://localhost:8000
```

## 🔄 Updates

To update the site:
1. **Edit** files locally
2. **Commit** changes
3. **Push** to GitHub
4. **Wait** a few minutes for automatic update
