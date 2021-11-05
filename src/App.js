import React from "react";
import SideDrawer from "./components/Drawer/Drawer";
import SettingsDrawer from "./components/Drawer/SettingsDrawer";
import Layout from "./components/Layout/Layout";

import SettingsProvider from "./context/SettingsProvider";
import Routes from "./Routes";

const App = () => {
  return (
    <SettingsProvider>
      <SideDrawer />
      <SettingsDrawer />
      <Layout>
        <Routes />
      </Layout>
    </SettingsProvider>
  );
};

export default App;
