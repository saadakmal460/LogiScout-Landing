// logger.js
import fs from "fs";

// Path where logs will be saved
const logFilePath = "app.log";

// Create a writable stream (append mode)
const logFile = fs.createWriteStream(logFilePath, { flags: "a" });

// Keep an in-memory buffer in case file writing is delayed
const buffer = [];

// Helper to write both to file and memory safely
const writeLog = (source, message) => {
  const timestamp = new Date().toISOString();
  const formatted = `[${timestamp}] [${source}] ${message}\n`;
  logFile.write(formatted);
  buffer.push(formatted);
};

// ---- 1️⃣ Capture all console logs safely ----
["log", "info", "warn", "error", "debug"].forEach(method => {
  const original = console[method];
  console[method] = (...args) => {
    const message = args.map(a => (typeof a === "string" ? a : JSON.stringify(a))).join(" ");
    writeLog(`console.${method}`, message);
    original.apply(console, args); // still show in terminal
  };
});

// ---- 2️⃣ Capture framework logs (stdout & stderr) ----
const captureStream = (stream, label) => {
  const originalWrite = stream.write;
  stream.write = function (chunk, ...args) {
    const message = chunk.toString().trim();
    if (message) writeLog(label, message);
    return originalWrite.apply(stream, [chunk, ...args]);
  };
};

captureStream(process.stdout, "stdout");
captureStream(process.stderr, "stderr");

// ---- 3️⃣ Optional: handle crash logs too ----
process.on("uncaughtException", err => {
  writeLog("uncaughtException", err.stack || err.message);
});
process.on("unhandledRejection", err => {
  writeLog("unhandledRejection", err?.stack || err?.message || String(err));
});

console.log("✅ Logger initialized — capturing all logs...");
