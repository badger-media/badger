import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Integration } from "../../common/types";

function getSupportedIntegrations(): Integration[] {
  // This is fairly rudimentary
  if (
    process.env.E2E_TEST === "true" &&
    process.env.__TEST_SUPPORTED_INTEGRATIONS
  ) {
    return JSON.parse(process.env.__TEST_SUPPORTED_INTEGRATIONS);
  } else if (process.platform === "win32") {
    return ["vmix", "obs", "ontime"];
  } else {
    return ["obs", "ontime"];
  }
}

const integrationsSlice = createSlice({
  name: "integrations",
  initialState: {
    supported: getSupportedIntegrations(),
  },
  reducers: {
    overrideSupportedIntegrations: (
      state,
      action: PayloadAction<Integration[]>,
    ) => {
      state.supported = action.payload;
    },
  },
});

export const integrationsReducer = integrationsSlice.reducer;
export const { overrideSupportedIntegrations } = integrationsSlice.actions;
