# 🚀 Deployment Guide - New World Music Tracker

## 📋 Vercel Deployment Setup

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

### 3. Deploy to Vercel

1. **Access** [Vercel](https://vercel.com)
2. **Sign in** with GitHub account
3. **Click** "New Project"
4. **Import** your repository
5. **Configure** project settings (optional)
6. **Click** "Deploy"

### 4. Access the Site

- **URL**: `https://your-project-name.vercel.app/`
- **Time**: 1-2 minutes to become available
- **Custom Domain**: Can be configured in Vercel dashboard

## 🔧 Important Files

### ✅ Required Files in Root:
- `index.html` - Main page
- `main.js` - JavaScript
- `style.css` - Styles
- `data/songs.json` - Song data
- `images/` - Images folder
- `vercel.json` - Vercel configuration

### ❌ Files that should NOT go to Vercel:
- `server.js` - Local development server
- `docs/` - Documentation folder (optional)
- `.git/` - Git repository data

## 🐛 Troubleshooting

### Site doesn't load
- Check if all files are in the root
- Confirm if GitHub Pages is enabled
- Wait a few minutes for propagation

### Images don't appear
- Check if the `images/` folder is in the root
- Check paths in JavaScript code

### JSON doesn't load
- Check if `data/songs.json` is in the root
- Confirm if the file is well formatted

### 404 Error
- Check if `index.html` is in the repository root
- Confirm if the repository name is correct in the URL

### Features don't work
- Check browser console (F12)
- Confirm if all files are being loaded
- Test in incognito mode

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

## 🚀 Quick Start

1. **Fork** this repository
2. **Enable** GitHub Pages in repository settings
3. **Select** the `main` branch as source
4. **Access** `https://your-username.github.io/nw-music/`
