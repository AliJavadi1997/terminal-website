// Define all available commands and their implementations

export const commands = {
  help: () => {
    return [
      {
        type: "text",
        content: "Available commands:",
      },
      {
        type: "text",
        content: "  help      - Show this help message",
      },
      {
        type: "text",
        content: "  projects  - View my projects",
      },
      {
        type: "text",
        content: "  skills    - See my technical skills",
      },
      {
        type: "text",
        content: "  contact   - Get in touch with me",
      },
      {
        type: "text",
        content: "  clear     - Clear the terminal",
      },
      {
        type: "text",
        content: "  whois     - Display information about me",
      },
    ];
  },

  whois: () => {
    return [
      {
        type: "text",
        content: "┌─────────────────────────┐",
      },
      {
        type: "text",
        content: "│       ABOUT ME          │",
      },
      {
        type: "text",
        content: "└─────────────────────────┘",
      },
      {
        type: "text",
        content: "I'm a web developer and designer based in Turin, Italy.",
      },
      {
        type: "text",
        content:
          "My journey in coding began with a curiosity about the application of graphics and design in digital products,",
      },
      {
        type: "text",
        content:
          "and has evolved into a deep love for computer science and programming.",
      },
      {
        type: "text",
        content: "",
      },
      {
        type: "text",
        content:
          "When I'm not coding, you can find me hiking or hanging out with my friends — or best of all, doing both.",
      },
    ];
  },

  projects: () => {
    return [
      {
        type: "text",
        content: "┌─────────────────────────┐",
      },
      {
        type: "text",
        content: "│        PROJECTS         │",
      },
      {
        type: "text",
        content: "└─────────────────────────┘",
      },
      {
        type: "text",
        content: "1. Project Alpha",
      },
      {
        type: "text",
        content:
          "   A React-based web application for task management with a clean, intuitive UI.",
      },
      {
        type: "text",
        content: "   Technologies: React, Node.js, MongoDB",
      },
      {
        type: "text",
        content: "",
      },
      {
        type: "text",
        content: "2. Data Visualization Dashboard",
      },
      {
        type: "text",
        content: "   Interactive dashboard for visualizing complex datasets.",
      },
      {
        type: "text",
        content: "   Technologies: D3.js, Vue.js, Firebase",
      },
      {
        type: "text",
        content: "",
      },
      {
        type: "text",
        content: "3. CLI Tool for Developers",
      },
      {
        type: "text",
        content:
          "   A command-line utility that helps developers automate common tasks.",
      },
      {
        type: "text",
        content: "   Technologies: Node.js, TypeScript",
      },
      {
        type: "text",
        content: "",
      },
      {
        type: "text",
        content:
          'Type "open [project-number]" to learn more about a specific project.',
      },
    ];
  },

  open: (args) => {
    const projectNum = args[0];

    switch (projectNum) {
      case "1":
        return [
          {
            type: "text",
            content: "┌─────────────────────────┐",
          },
          {
            type: "text",
            content: "│     PROJECT ALPHA       │",
          },
          {
            type: "text",
            content: "└─────────────────────────┘",
          },
          {
            type: "text",
            content:
              "Project Alpha is a comprehensive task management system built with React.",
          },
          {
            type: "text",
            content: "Features include:",
          },
          {
            type: "text",
            content: "- Drag-and-drop task organization",
          },
          {
            type: "text",
            content: "- Real-time collaboration",
          },
          {
            type: "text",
            content: "- Customizable workflows",
          },
          {
            type: "text",
            content: "- Mobile-responsive design",
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "text",
            content: "GitHub: https://github.com/example/project-alpha",
          },
          {
            type: "text",
            content: "Live Demo: https://project-alpha-demo.example.com",
          },
        ];
      case "2":
        return [
          {
            type: "text",
            content: "┌─────────────────────────────┐",
          },
          {
            type: "text",
            content: "│ DATA VISUALIZATION DASHBOARD │",
          },
          {
            type: "text",
            content: "└─────────────────────────────┘",
          },
          {
            type: "text",
            content:
              "An interactive dashboard for data visualization with customizable charts and filters.",
          },
          {
            type: "text",
            content: "Features include:",
          },
          {
            type: "text",
            content: "- Multiple chart types (bar, line, pie, scatter)",
          },
          {
            type: "text",
            content: "- CSV/JSON data import",
          },
          {
            type: "text",
            content: "- Sharable dashboard links",
          },
          {
            type: "text",
            content: "- Export as PNG/PDF",
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "text",
            content: "GitHub: https://github.com/example/data-viz-dashboard",
          },
          {
            type: "text",
            content: "Live Demo: https://data-viz.example.com",
          },
        ];
      case "3":
        return [
          {
            type: "text",
            content: "┌─────────────────────────┐",
          },
          {
            type: "text",
            content: "│    CLI DEVELOPER TOOL    │",
          },
          {
            type: "text",
            content: "└─────────────────────────┘",
          },
          {
            type: "text",
            content:
              "A powerful command-line utility that streamlines development workflows.",
          },
          {
            type: "text",
            content: "Features include:",
          },
          {
            type: "text",
            content: "- Project scaffolding",
          },
          {
            type: "text",
            content: "- Automated git workflow",
          },
          {
            type: "text",
            content: "- Code linting and formatting",
          },
          {
            type: "text",
            content: "- Build process optimization",
          },
          {
            type: "text",
            content: "",
          },
          {
            type: "text",
            content: "GitHub: https://github.com/example/dev-cli-tool",
          },
          {
            type: "text",
            content: "NPM: https://www.npmjs.com/package/dev-cli-tool",
          },
        ];
      default:
        return [
          {
            type: "error",
            content: `Project "${projectNum}" not found. Type "projects" to see available projects.`,
          },
        ];
    }
  },

  skills: () => {
    return [
      {
        type: "text",
        content: "┌─────────────────────────┐",
      },
      {
        type: "text",
        content: "│         SKILLS          │",
      },
      {
        type: "text",
        content: "└─────────────────────────┘",
      },
      {
        type: "text",
        content: "Frontend:",
      },
      {
        type: "text",
        content: "- JavaScript/TypeScript",
      },
      {
        type: "text",
        content: "- React.js / Next.js",
      },
      {
        type: "text",
        content: "- HTML5 / CSS3 / SASS",
      },
      {
        type: "text",
        content: "- Vue.js",
      },
      {
        type: "text",
        content: "",
      },
      {
        type: "text",
        content: "Backend:",
      },
      {
        type: "text",
        content: "- Node.js / Express",
      },
      {
        type: "text",
        content: "- Python / Django",
      },
      {
        type: "text",
        content: "- GraphQL",
      },
      {
        type: "text",
        content: "- RESTful APIs",
      },
      {
        type: "text",
        content: "",
      },
      {
        type: "text",
        content: "Database:",
      },
      {
        type: "text",
        content: "- MongoDB",
      },
      {
        type: "text",
        content: "- PostgreSQL",
      },
      {
        type: "text",
        content: "- Firebase",
      },
      {
        type: "text",
        content: "",
      },
      {
        type: "text",
        content: "Other:",
      },
      {
        type: "text",
        content: "- Git / GitHub",
      },
      {
        type: "text",
        content: "- Docker / Kubernetes",
      },
      {
        type: "text",
        content: "- AWS / Netlify / Vercel",
      },
      {
        type: "text",
        content: "- CI/CD Pipelines",
      },
    ];
  },

  contact: () => {
    return [
      {
        type: "text",
        content: "┌─────────────────────────┐",
      },
      {
        type: "text",
        content: "│        CONTACT          │",
      },
      {
        type: "text",
        content: "└─────────────────────────┘",
      },
      {
        type: "text",
        content: "Email: contact@alijavadi.net",
      },
      {
        type: "text",
        content: "https://github.com/AliJavadi1997",
      },
      {
        type: "text",
        content: "https://www.linkedin.com/in/alijavadi1997/",
      },
      {
        type: "text",
        content: "",
      },
      {
        type: "text",
        content:
          "Feel free to reach out! I'm always open to collaborating.",
      },
    ];
  },

  clear: () => {
    return "clear"; // Special case handled by the Terminal component
  },
};

// Handle the special case for the clear command in the Terminal component
export const processSpecialCommands = (command, setHistory) => {
  if (command === "clear") {
    setHistory([]);
    return true;
  }
  return false;
};
