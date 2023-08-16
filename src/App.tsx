import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ExperiencedA } from "./screens/ExperiencedA";
import { ExperiencedI } from "./screens/ExperiencedI";
import { Ending } from "./screens/Ending";
import { ExperiencedC } from "./screens/ExperiencedC";
import { ExperiencedB } from "./screens/ExperiencedB";
import { Loading } from "./screens/Loading";
import { Wearedeveloping } from "./screens/Wearedeveloping";
import { Choice } from "./screens/Choice";
import { Choosedesign } from "./screens/Choosedesign";
import { Main } from "./screens/Main/Main";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Main />,
  },
  {
    path: "/experiencedu95a",
    element: <ExperiencedA />,
  },
  {
    path: "/experiencedu95i",
    element: <ExperiencedI />,
  },
  {
    path: "/ending",
    element: <Ending />,
  },
  {
    path: "/experiencedu95c",
    element: <ExperiencedC />,
  },
  {
    path: "/experiencedu95b",
    element: <ExperiencedB />,
  },
  {
    path: "/loading",
    element: <Loading />,
  },
  {
    path: "/wearedeveloping",
    element: <Wearedeveloping />,
  },
  {
    path: "/choice",
    element: <Choice />,
  },
  {
    path: "/choosedesign",
    element: <Choosedesign />,
  },
  {
    path: "/index",
    element: <Main />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
