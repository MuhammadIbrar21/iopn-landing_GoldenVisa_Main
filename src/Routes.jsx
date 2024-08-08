import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import GoldenVisaLandingvTwoPage from "./pages/GoldenVisaLandingvTwo";
import GoldenVisaOPNTokenTokenMintPage from "./pages/GoldenVisaOPNTokenTokenMint";
import GoldenVisaGenZTalentProgramPage from "./pages/GoldenVisaGenZTalentProgram";
import NotFound from "./pages/NotFound";

const Routes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/golden-visa",
      element: <GoldenVisaLandingvTwoPage />,
    },
    {
      path: "/OPNTokenMint",
      element: <GoldenVisaOPNTokenTokenMintPage />,
    },
    {
      path: "/GenzTalentProgram",
      element: <GoldenVisaGenZTalentProgramPage />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default Routes;
