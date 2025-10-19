# Translation System - New World Music Tracker

## Overview
This project now supports 3 languages: Portuguese (default), English, and Spanish.

## File Structure

### Translation Files
- `data/translations/pt.json` - Portuguese translations
- `data/translations/en.json` - English translations  
- `data/translations/es.json` - Spanish translations

### Song Files
- `data/songs_pt.json` - Songs in Portuguese
- `data/songs_en.json` - Songs in English
- `data/songs_es.json` - Songs in Spanish

### HTML Pages
- `index.html` - Main page (Portuguese)
- `en.html` - English page
- `es.html` - Spanish page

## How It Works

### 1. Language Selector
- Each page has a language selector at the top
- The selected language is saved in localStorage
- When changing language, the page reloads automatically

### 2. Dynamic Loading
- JavaScript loads translations based on the selected language
- Songs are loaded from the file corresponding to the language
- The interface is updated with translated texts

### 3. Persistence
- The chosen language is saved in localStorage
- User progress is maintained regardless of language
- When returning to the page, the previous language is restored

## Adding New Languages

### 1. Create Translation File
Create a new file in `data/translations/[code].json`:

```json
{
  "language": "Language Name",
  "languageCode": "code",
  "ui": {
    "title": "🎶 New World Music Tracker",
    "subtitle": "Explanatory text...",
    "partsCollected": "Parts Collected:",
    "completeInstruments": "Complete Instruments:",
    "completeSongs": "Complete Songs:",
    "resetProgress": "Reset Progress",
    "exportProgress": "Export Progress",
    "resetConfirm": "Reset confirmation...",
    "resetSuccess": "Successfully reset...",
    "exportSuccess": "Successfully exported..."
  },
  "instruments": {
    "Guitar": "Guitar Translation",
    "Drum": "Drum Translation",
    "Flute": "Flute Translation",
    "Violin": "Violin Translation",
    "Bass": "Bass Translation",
    "Mandolin": "Mandolin Translation"
  },
  "parts": {
    "Part 1": "Part 1",
    "Part 2": "Part 2",
    "Part 3": "Part 3"
  }
}
```

### 2. Create Song File
Create a new file in `data/songs_[code].json` with translated songs.

### 3. Create HTML Page
Create a new page `[code].html` based on existing pages.

### 4. Update JavaScript
Add the new language to the selector in all HTML pages.

## Current Translations

### Portuguese (pt)
- Page: `index.html`
- Songs: Names translated to Portuguese
- Interface: Texts in Portuguese

### English (en)  
- Page: `en.html`
- Songs: Original names in English
- Interface: Texts in English

### Spanish (es)
- Page: `es.html` 
- Songs: Names translated to Spanish
- Interface: Texts in Spanish

## Maintenance

### Updating Translations
1. Edit the JSON file corresponding to the language
2. Changes are applied automatically when reloading the page

### Adding New Songs
1. Add the song to all language files
2. Keep the same `id` in all languages
3. Translate only the `name` and `instruments.name` fields

### Adding New Instruments
1. Add the translation in `data/translations/[language].json`
2. Use the English key as reference
3. Update all languages
