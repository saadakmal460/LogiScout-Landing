import fs from "fs";
import { spawn } from "child_process";

const logFile = fs.createWriteStream("app.log", { flags: "a" });

// Spawn the real Next.js dev process
const child = spawn("npm", ["run", "next:dev"], {
  shell: true,
  stdio: ["ignore", "pipe", "pipe"], // capture stdout + stderr
});

console.log("✅ Logger initialized — capturing all logs...");

// Capture STDOUT (normal logs)
child.stdout.on("data", (data) => {
  const line = data.toString().trim();
  process.stdout.write(line + "\n"); // show in terminal
  logFile.write(`[${new Date().toISOString()}] [stdout] ${line}\n`);
});

// Capture STDERR (warnings/errors)
child.stderr.on("data", (data) => {
  const line = data.toString().trim();
  process.stderr.write(line + "\n"); // show in terminal
  logFile.write(`[${new Date().toISOString()}] [stderr] ${line}\n`);
});

child.on("exit", (code) => {
  console.log(`App exited with code ${code}`);
  logFile.end();
});
