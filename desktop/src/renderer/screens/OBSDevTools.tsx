import { useCallback, useState } from "react";
import { Button } from "@badger/components/button";
import { dispatch, useAppSelector } from "../store";
import { OBSRequestTypes } from "obs-websocket-js";

export default function OBSDevToolsScreen() {
  const connState = useAppSelector((state) => state.obs.connection);
  const [req, setReq] = useState("");
  const [args, setArgs] = useState("{}");
  const doExecute = useCallback(async () => {
    let argsJSON;
    try {
      argsJSON = JSON.parse(args);
    } catch (e) {
      alert("Invalid args JSON");
      return;
    }
    dispatch.obsCallArbitrary({
      req: req as keyof OBSRequestTypes,
      data: argsJSON,
    });
  }, [req, args]);
  const callResult = useAppSelector((state) => state.obs.arbitraryCallResult);

  return (
    <div>
      <h1 className="text-xl">OBS Dev Tools</h1>
      <div className="space-y-2">
        <label className="block border-2 p-1">
          Request
          <select
            value={req}
            onChange={(e) => setReq(e.target.value)}
            className="border-2 border-black"
          >
            {connState.availableRequests
              ?.sort((a, b) => a.localeCompare(b))
              ?.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              )) || null}
          </select>
        </label>
        <label className="blockborder-2 p-1">
          Parameters (JSON)
          <textarea
            value={args}
            onChange={(e) => setArgs(e.target.value)}
            className="border-2 mx-4 my-2 p-1 block"
          />
        </label>
        <Button onClick={doExecute}>Execute</Button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg">Response</h2>
        <pre className="max-w-[80%] max-h-48 overflow-y-scroll overflow-x-scroll">
          {JSON.stringify(callResult, null, 2)}
        </pre>
      </div>
    </div>
  );
}
