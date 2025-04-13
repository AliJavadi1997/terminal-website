"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './Terminal.module.css';
import { commands, processSpecialCommands } from './commands';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Initialize terminal with a welcome message
  useEffect(() => {
    const welcomeMsg = [
      {
        type: 'ascii',
        content: ` ________      ___           ___             ___      ________      ___      ___  ________      ________      ___     
|\\   __  \\    |\\  \\         |\\  \\           |\\  \\    |\\   __  \\    |\\  \\    /  /||\\   __  \\    |\\   ___ \\    |\\  \\    
\\ \\  \\|\\  \\   \\ \\  \\        \\ \\  \\          \\ \\  \\   \\ \\  \\|\\  \\   \\ \\  \\  /  / /\\ \\  \\|\\  \\   \\ \\  \\_|\\ \\   \\ \\  \\   
 \\ \\   __  \\   \\ \\  \\        \\ \\  \\       __ \\ \\  \\   \\ \\   __  \\   \\ \\  \\/  / /  \\ \\   __  \\   \\ \\  \\ \\\\ \\   \\ \\  \\  
  \\ \\  \\ \\  \\   \\ \\  \\____    \\ \\  \\     |\\  \\\\_\\  \\   \\ \\  \\ \\  \\   \\ \\    / /    \\ \\  \\ \\  \\   \\ \\  \\_\\\\ \\   \\ \\  \\ 
   \\ \\__\\ \\__\\   \\ \\_______\\   \\ \\__\\    \\ \\________\\   \\ \\__\\ \\__\\   \\ \\__/ /      \\ \\__\\ \\__\\   \\ \\_______\\   \\ \\__\\
    \\|__|\\|__|    \\|_______|    \\|__|     \\|________|    \\|__|\\|__|    \\|__|/        \\|__|\\|__|    \\|_______|    \\|__|`
      },
      {
        type: 'text',
        content: 'Welcome to my terminal-style web application!'
      },
      {
        type: 'text',
        content: 'Type "help" to see available commands.'
      }
    ];
    setHistory(welcomeMsg);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Focus input field when terminal is clicked
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener('click', handleClick);
    }

    return () => {
      if (terminal) {
        terminal.removeEventListener('click', handleClick);
      }
    };
  }, []);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setCursorPosition(e.target.selectionStart);
  };

  const handleKeyDown = (e) => {
    // Track cursor position for arrow keys
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      // Use setTimeout to get the updated cursor position after the default action
      setTimeout(() => {
        if (inputRef.current) {
          setCursorPosition(inputRef.current.selectionStart);
        }
      }, 0);
    }
    // Handle up/down arrows for command history
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        const newInput = commandHistory[commandHistory.length - 1 - newIndex];
        setHistoryIndex(newIndex);
        setInput(newInput);
        setCursorPosition(newInput.length);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        const newInput = commandHistory[commandHistory.length - 1 - newIndex];
        setHistoryIndex(newIndex);
        setInput(newInput);
        setCursorPosition(newInput.length);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
        setCursorPosition(0);
      }
    } else if (e.key === 'Home') {
      setCursorPosition(0);
    } else if (e.key === 'End') {
      setCursorPosition(input.length);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Basic autocompletion
      const commandKeys = Object.keys(commands);
      const matchingCommands = commandKeys.filter(cmd => cmd.startsWith(input));
      
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
        setCursorPosition(matchingCommands[0].length);
      } else if (matchingCommands.length > 1) {
        // Display available commands that match
        setHistory(prev => [
          ...prev, 
          { type: 'command', content: input },
          { type: 'text', content: matchingCommands.join('  ') }
        ]);
      }
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      setCursorPosition(inputRef.current.selectionStart);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    
    if (!trimmedInput) return;

    // Add command to history display
    setHistory(prev => [...prev, { type: 'command', content: trimmedInput }]);
    
    // Add to command history
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // Process command
    processCommand(trimmedInput);
    
    // Clear input
    setInput('');
    setCursorPosition(0);
  };

  const processCommand = (command) => {
    const [cmd, ...args] = command.split(' ');
    
    // Check for special commands like 'clear'
    if (processSpecialCommands(cmd, setHistory)) {
      return;
    }
    
    if (commands[cmd]) {
      const output = commands[cmd](args);
      setHistory(prev => [...prev, ...output]);
    } else {
      setHistory(prev => [
        ...prev, 
        { 
          type: 'error', 
          content: `Command not found: ${cmd}. Type 'help' to see available commands.` 
        }
      ]);
    }
  };

  return (
    <div className={styles.terminal} ref={terminalRef}>
      <div className={styles.terminalOutput}>
        {history.map((item, index) => (
          <div key={index} className={styles[item.type]}>
            {item.type === 'command' ? (
              <div>
                <span className={styles.prompt}>visitor@portfolio:~$</span> {item.content}
              </div>
            ) : (
              item.content
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <span className={styles.prompt}>user@alijavadi.net:~$</span>
        <div className={styles.inputWrapper}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
            className={styles.commandInput}
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
          <span 
            className={`${styles.cursor} ${cursorVisible ? styles.visible : ''}`}
            style={{ 
              left: `calc(${cursorPosition}ch)` 
            }}
          ></span>
        </div>
      </form>
    </div>
  );
} 