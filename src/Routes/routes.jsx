import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import TextTable from "../components/TextTable";
import TextEditor from "../components/TextEditor";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <TextTable /> },
      { path: "/edit", element: <TextEditor /> },
    ],
  },
]);
