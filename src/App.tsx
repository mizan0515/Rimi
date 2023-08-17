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
import { Index } from "./screens/Index";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Index />,
  },
  {
    path: "/experienceda",
    element: <ExperiencedA />,
  },
  {
    path: "/experiencedi",
    element: <ExperiencedI />,
  },
  {
    path: "/ending",
    element: <Ending />,
  },
  {
    path: "/experiencedc",
    element: <ExperiencedC />,
  },
  {
    path: "/experiencedb",
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
    path: "/main",
    element: <Index />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
