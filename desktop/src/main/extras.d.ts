/* eslint-disable no-var */
declare module "electron-squirrel-startup" {
  let isSquirrel: boolean;
  exports = isSquirrel;
}

declare module globalThis {
  var __MAIN_STORE: import("./store").AppStore;
}
