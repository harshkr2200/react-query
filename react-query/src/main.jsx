import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ProductsPage from "./component/ProductsPage.jsx";
import "./index.css";
import ProductShowCasePage from './component/ProductShowCasePage.jsx';


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products-page",
    element: <ProductsPage />,
  },
  {
    path: "/product-page-details/:productId",
    element: <ProductShowCasePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
