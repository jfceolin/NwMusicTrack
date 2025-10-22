New World Music Tracker

A web app for tracking the collection progress of songs and instruments in the game New World.

📋 Features
	•	✅ Instrument part tracking system
	•	✅ Multi-language support (Portuguese, English, Spanish)
	•	✅ Local progress storage
	•	✅ Data export/import
	•	✅ Responsive interface
	•	✅ TypeScript with strict typing
	•	✅ Centralized color system

🚀 How to Use

# Install dependencies

```bash
npm install
```

### Development

```bash
# Compile TypeScript
npm run build

# Start development server
npm run dev

# Watch for changes (auto compile)
npm run watch
```

### Production

```bash
# Build for production
npm run build

# Start server
npm start
```

🛠️ Available Scripts
	•	npm run build - Compiles TypeScript to JavaScript
	•	npm start - Starts production server
	•	npm run dev - Compiles and runs development server
	•	npm run watch - Watch mode for development
	•	npm run clean - Removes compiled files
	•	npm run lint - Runs ESLint code check
	•	npm run lint:fix - Automatically fixes issues
	•	npm run format - Formats code with Prettier
	•	npm run format:check - Checks code formatting
	•	npm run type-check - Type checking without compiling

📁 Project Structure

nw-music/
├── src/
│   ├── main.ts              # Main application file
│   ├── server.ts            # HTTP server
│   ├── types.ts             # TypeScript type definitions
│   ├── utils/
│   │   ├── colors.ts        # Centralized color system
│   │   └── index.ts         # Barrel export
│   └── styles/
│       └── style.css        # App styles
├── data/
│   ├── songs.json           # Song data
│   └── translations/        # Translation files
│       ├── pt.json
│       ├── en.json
│       └── es.json
├── images/                  # Images and icons
├── dist/                    # Compiled files (generated)
├── .eslintrc.json           # ESLint config
├── .prettierrc              # Prettier config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies and scripts

🎨 Color System
The project uses a centralized color system in src/utils/colors.ts:
	•	Colors are defined as exported constants
	•	The applyColors() function sets them as CSS variables
	•	Simplifies maintenance and theming

🔧 Technologies
	•	TypeScript – Main language with strict typing
	•	Node.js – Server runtime
	•	ESLint – Code linting
	•	Prettier – Code formatting
	•	CSS3 – Styling with custom variables

📝 Best Practices Implemented

TypeScript
	•	✅ strict mode enabled
	•	✅ Source maps for debugging
	•	✅ No use of any
	•	✅ Explicit types on all functions
	•	✅ Strict null/undefined checks

Code
	•	✅ No code duplication
	•	✅ Clear separation of responsibilities
	•	✅ ES6 module system
	•	✅ Barrel exports for organization

Quality
	•	✅ ESLint configured
	•	✅ Prettier configured
	•	✅ Proper .gitignore
	•	✅ Validation scripts

🌍 Language Support

The app automatically detects browser language and supports:
	•	🇧🇷 Portuguese (pt)
	•	🇺🇸 English (en)
	•	🇪🇸 Spanish (es)

💾 Storage

All data is automatically saved to the browser’s localStorage:
	•	Collection progress
	•	Selected language

📤 Export / Import
	•	Export: Saves progress as a JSON file
	•	Import: Restores progress from JSON file
	•	Compatible with older versions

🤝 Contributing
	1.	Fork the repository
	2.	Create your feature branch (git checkout -b feature/new-feature)
	3.	Commit your changes (git commit -m 'Add new feature')
	4.	Push to the branch (git push origin feature/new-feature)
	5.	Open a Pull Request

📄 License

This project is under the MIT License.
