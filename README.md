# Terminal Website

A web application that simulates a terminal interface, built with React and Next.js. This interactive portfolio website presents information about the developer in a command-line style interface.

![Terminal Website Screenshot](https://via.placeholder.com/800x400?text=Terminal+Website+Screenshot)

## Features

- Fully interactive command-line interface
- Responsive design that works on desktop and mobile devices
- Command history navigation using arrow keys
- Tab completion for commands
- Blinking cursor that follows user input
- Custom ASCII art welcome banner

## Available Commands

- `help` - Shows all available commands
- `whois` - Displays information about the developer
- `projects` - Lists portfolio projects
- `open [project-number]` - Shows details about a specific project
- `skills` - Lists technical skills
- `contact` - Shows contact information
- `clear` - Clears the terminal screen

## Technologies Used

- React 19
- Next.js 15.3.0
- CSS Modules for styling
- Deployed on Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/terminal-website.git
   cd terminal-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
terminal-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Terminal/
│   │   │   │   ├── Terminal.js
│   │   │   │   ├── Terminal.module.css
│   │   │   │   └── commands.js
│   │   │   └── TerminalPage.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── page.module.css
│   └── public/
└── package.json
```

## Customization

To customize the terminal for your own use:

1. Edit the `commands.js` file to update the information about yourself, your projects, skills, and contact details.
2. Modify the welcome ASCII art and message in the `Terminal.js` file.
3. Update styling in the CSS files to match your preferred color scheme.

## Deployment

This project can be easily deployed using Vercel:

```
npm run build
npm run start
```

Or deploy directly with the Vercel CLI:

```
vercel
```

## License

MIT

## Author

Ali Javadi - [Github](https://github.com/AliJavadi1997) - [LinkedIn](https://www.linkedin.com/in/alijavadi1997/) - [Email](mailto:contact@alijavadi.net)
