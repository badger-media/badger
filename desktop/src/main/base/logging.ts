import logging, { LogLevelNames } from "loglevel";
import prefix from "loglevel-plugin-prefix";
import path from "path";
import fs from "fs";
import isElectron from "is-electron";
import { listenOnStore } from "../storeListener";

let app: Electron.App;
if (isElectron()) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app = require("electron").app;
} else {
  app = {
    getPath: () => process.cwd(),
    on: () => {},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;
}

const logsPath =
  process.env.BADGER_LOGS_PATH ?? path.join(app.getPath("userData"), "logs");
fs.mkdirSync(logsPath, { recursive: true });
const logStream = fs.createWriteStream(path.join(logsPath, "main.log"), {
  flags: "a",
});

app.on("will-quit", () => {
  logStream.end();
});

logging.methodFactory = function (level) {
  return function (message) {
    const timeStr = new Date().toISOString();
    logStream.write(`${timeStr}: ${level}: ${message}\n`);
    if (level === "error") {
      process.stderr.write(`${level}: ${message}\n`);
    } else {
      process.stdout.write(`${level}: ${message}\n`);
    }
  };
};

export let logLevel = (process.env.BADGER_LOG_LEVEL as LogLevelNames) ?? "info";
logging.setLevel(logLevel);
prefix.reg(logging);
prefix.apply(logging, {
  template: "%n:",
});
logging.info(`Started & configured logging (at ${logLevel}).`);

// We store the names of all known loggers so that we can change their level at runtime,
// taking advantage of the fact that loglevel returns the same logger each time we call getLogger
// with the same name.
const loggers = new Set<string>();

export function getLogger(name: string) {
  loggers.add(name);
  const logger = logging.getLogger(name);
  logger.setLevel(logLevel);
  return logger;
}

export function setLogLevel(level: LogLevelNames) {
  if (process.env.BADGER_LOG_LEVEL) {
    logging.info(
      `Ignoring request to change log level to ${level} because it is set using BADGER_LOG_LEVEL.`,
    );
    return;
  }
  logLevel = level;
  for (const logger of loggers) {
    logging.getLogger(logger).setLevel(level);
  }
  logging[level](`Changed log level to ${level}`);
}

listenOnStore({
  predicate: (_, oldState, newState) =>
    oldState.settings.logging.level !== newState.settings.logging.level,
  effect: (_, api) => {
    setLogLevel(api.getState().settings.logging.level);
  },
});

export default {
  getLogger,
};
