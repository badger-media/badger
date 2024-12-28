import { Switch } from "@badger/components/switch";
import { Label } from "@badger/components/label";
import Button from "@badger/components/button";
import { dispatch, useAppSelector } from "../store";
import isElectron from "is-electron";
import logging from "loglevel";

async function trySendRenderer(fn: string) {
  if (isElectron()) {
    const { ipcRenderer } = await import(
      /* @vite-ignore */ `${"electron/renderer"}`
    );
    ipcRenderer.send(fn);
  } else {
    logging.warn(`Tried to send ${fn} but not in electron`);
  }
}

export function DevToolsSettings() {
  const enabled = useAppSelector((state) => state.settings.devtools.enabled);
  const integrations = useAppSelector((state) => state.integrations.supported);
  return (
    <div>
      <h2 className="text-xl">Developer Tools</h2>
      <p>
        Do not enable unless you know what you are doing, these open you up to
        (theoretical) security vulnerabilities.
      </p>
      <div className="flex items-center space-x-2">
        <Switch
          id="enable-devmode"
          checked={enabled}
          onCheckedChange={(v: boolean) =>
            dispatch.setSetting("devtools", "enabled", v)
          }
        />
        <Label htmlFor="enable-devmode">Enable Developer Mode</Label>
      </div>
      {enabled && (
        <div className="flex flex-col items-start space-y-2">
          <h3>Enabled integrations</h3>
          {(["obs", "vmix", "ontime"] as const).map((int) => (
            <div key={int}>
              <Switch
                id={"enable-" + int}
                checked={integrations.includes(int)}
                onCheckedChange={(v) => {
                  const newIntegrations = [...integrations];
                  if (v) {
                    newIntegrations.push(int);
                  } else {
                    newIntegrations.splice(newIntegrations.indexOf(int), 1);
                  }
                  dispatch.overrideSupportedIntegrations(newIntegrations);
                }}
              />
              <Label htmlFor={"enable-" + int}>{int}</Label>
            </div>
          ))}
          <Button
            color="warning"
            onClick={() => {
              throw new Error("Test Renderer Exception");
            }}
          >
            Throw unhandled exception
          </Button>
          <Button
            color="danger"
            onClick={() => {
              trySendRenderer("devtools-throw-error");
            }}
          >
            Throw error in main process
          </Button>
          <Button
            color="danger"
            onClick={() => {
              trySendRenderer("devtools-crash");
            }}
          >
            Crash main process
          </Button>
        </div>
      )}
    </div>
  );
}
