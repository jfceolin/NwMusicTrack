# 🌍 Translation Guide - New World Music Tracker

## Overview
This project supports 3 languages: Portuguese (default), English, and Spanish.

## File Structure

### Translation Files
- `data/translations/pt.json` - Portuguese translations
- `data/translations/en.json` - English translations  
- `data/translations/es.json` - Spanish translations

### Song Files
- `data/songs.json` - Song data (language-neutral IDs)

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
- Songs are loaded from the main songs.json file
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
    "importProgress": "Import Progress",
    "resetConfirm": "Reset confirmation...",
    "resetSuccess": "Successfully reset...",
    "exportSuccess": "Successfully exported...",
    "importSuccess": "Successfully imported...",
    "importError": "Error importing file...",
    "importConfirm": "This will replace all current progress..."
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
  },
  "songs": {
    "song-1": "Song Name Translation",
    "song-2": "Another Song Translation"
  }
}
```

### 2. Create HTML Page
Create a new page `[code].html` based on existing pages.

### 3. Update JavaScript
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
1. Add the song to `data/songs.json` with a unique ID
2. Add translations to all language files in the `songs` section
3. Keep the same `id` in all languages
4. Translate only the song names

### Adding New Instruments
1. Add the translation in `data/translations/[language].json`
2. Use the English key as reference
3. Update all languages

## Translation Guidelines

### UI Text
- Keep it concise and clear
- Use consistent terminology
- Maintain the same tone across languages

### Song Names
- Research official translations when available
- Maintain cultural context
- Keep names recognizable

### Technical Terms
- Use standard gaming terminology
- Maintain consistency with game documentation
- Provide context when needed
