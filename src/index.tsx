import React from 'react';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/features/symbol"
import "core-js/features/composite-symbol"
import "core-js/features/object"
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query"
import './styles/index.scss';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

