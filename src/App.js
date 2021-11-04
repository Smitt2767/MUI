import React, { Suspense } from "react";
import SideDrawer from "./components/Drawer/Drawer";
import SettingsDrawer from "./components/Drawer/SettingsDrawer";

import SettingsProvider from "./context/SettingsProvider";
import Routes from "./Routes";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SettingsProvider>
        <SideDrawer />
        <SettingsDrawer />
        <Routes />
      </SettingsProvider>
    </Suspense>
  );
};

export default App;
