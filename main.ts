// The One-Line Exit — writes the funniest one-line resignation letter
// we could craft to /output/entry.txt, with no trailing newline.
//
// The letter: the office mime finally speaks, exactly once, to quit.
// Specific voice (a mime), a surprise turn (his first-ever words are
// his resignation), and it reads like a letter someone could send.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 140;

const LETTER =
  "Dear all, after three years as this office's mime, I resign — this email is the first and last thing I will ever say here.";

function validate(letter: string): void {
  if (letter.includes("\n") || letter.includes("\r")) {
    throw new Error("resignation letter must be exactly one line");
  }
  if (letter.trim().length === 0) {
    throw new Error("resignation letter must not be blank");
  }
  if (letter.length > MAX_CHARS) {
    throw new Error(
      `resignation letter is ${letter.length} characters; the limit is ${MAX_CHARS}`,
    );
  }
}

function main(): void {
  validate(LETTER);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: the gate counts every character, newline included.
  writeFileSync(OUTPUT_PATH, LETTER, "utf8");
}

main();
