"use client";

import { useState, useEffect } from "react";
import Terminal from "./Terminal/Terminal";
import styles from "../page.module.css";

export default function TerminalPage() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  // Update the date and time every second
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Terminal />
      <footer className={styles.footer}>
        <span>{currentDateTime}</span>
        <span>Terminal Website v1.0</span>
      </footer>
    </>
  );
} 