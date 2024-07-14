import React from "react";
import AppRouter from "./Route/AppRouter";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <>
      <Ecom />
    </>
  );
};

export default App;

const Ecom = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div style={styles.container}>
          <AppRouter />
        </div>
      </PersistGate>
    </Provider>
  );
};

// app styles
const styles = {
  container: {
    width: "100vw",
    height: "100vh",
  },
};
