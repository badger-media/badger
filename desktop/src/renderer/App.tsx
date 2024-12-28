import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import ConnectAndSelectShowGate from "./screens/ConnectAndSelectShowGate";
import MainScreen from "./screens/MainScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import { PreflightGate } from "./screens/PreflightGate";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PreflightGate>
          <ConnectAndSelectShowGate>
            <Suspense fallback={<div>Loading...</div>}>
              <MainScreen />
            </Suspense>
          </ConnectAndSelectShowGate>
        </PreflightGate>
      </Provider>
    </QueryClientProvider>
  );
}
