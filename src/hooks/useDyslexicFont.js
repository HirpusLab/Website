import { useState } from "react";

const STORAGE_KEY = "dyslexic-font";

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export default function useDyslexicFont() {
  const [isDyslexic, setIsDyslexic] = useState(readStored);

  function toggle() {
    setIsDyslexic((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch (err) {
        console.warn("Could not save dyslexic font preference:", err);
      }
      return next;
    });
  }

  return [isDyslexic, toggle];
}
