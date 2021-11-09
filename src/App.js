import React from "react";
import { Provider } from "react-redux";
import SideDrawer from "./components/Drawer/Drawer";
import SettingsDrawer from "./components/Drawer/SettingsDrawer";
import Layout from "./components/Layout/Layout";

import SettingsProvider from "./context/SettingsProvider";
import Routes from "./Routes";
import store from "./store";

const App = () => {
  return (
    <SettingsProvider>
      <Provider store={store}>
        <SideDrawer />
        <SettingsDrawer />
        <Layout>
          <Routes />
        </Layout>
      </Provider>
    </SettingsProvider>
  );
};

export default App;
