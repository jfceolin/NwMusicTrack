# 🚀 Deploy to GitHub Pages

## Initial Setup

1. **Fork** this repository to your GitHub account
2. **Rename** the repository to `your-username.github.io` (if it's a personal page) or keep the current name
3. **Enable** GitHub Pages in repository settings:
   - Go to Settings → Pages
   - In "Source", select "Deploy from a branch"
   - Choose the `main` branch as source
   - Click "Save"

## Access

After configuration, your page will be available at:
- **Personal page**: `https://your-username.github.io/`
- **Specific repository**: `https://your-username.github.io/repo-name/`

## Important Files

- ✅ `.nojekyll` - Disables Jekyll processing
- ✅ `_config.yml` - Jekyll configuration (if needed)
- ✅ `.gitignore` - Ignores unnecessary files
- ✅ `index.html` - Main page

## Verification

To verify if it's working:
1. Access your page URL
2. Test all functionalities:
   - Language selection
   - Item marking
   - Progress reset
   - Data export

## Troubleshooting

### Page doesn't load
- Check if GitHub Pages is enabled
- Confirm if the `main` branch is selected
- Wait a few minutes for deployment

### 404 Error
- Check if the `index.html` file is in the root
- Confirm if the `.nojekyll` file exists

### Features don't work
- Check browser console (F12)
- Confirm if all files are being loaded
- Test in incognito mode

## Updates

To update the page:
1. Make changes to the files
2. Commit and push to the `main` branch
3. GitHub Pages will update automatically in a few minutes
