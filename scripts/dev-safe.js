const { spawnSync, spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const projectRoot = process.cwd();
const port = process.env.PORT || "3000";
const lockPath = path.join(projectRoot, ".next", "dev", "lock");

function runPowerShell(command) {
  return spawnSync(
    "powershell",
    ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", command],
    { stdio: "inherit", cwd: projectRoot }
  );
}

function cleanupExistingDevServer() {
  runPowerShell(
    `$connections = Get-NetTCPConnection -LocalPort ${port} -State Listen -ErrorAction SilentlyContinue; ` +
      `if ($connections) { $connections | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { taskkill /PID $_ /F } }`
  );

  if (fs.existsSync(lockPath)) {
    fs.rmSync(lockPath, { force: true });
  }
}

cleanupExistingDevServer();

const child = spawn("cmd.exe", ["/c", "node_modules\\.bin\\next.cmd", "dev", "--webpack"], {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
