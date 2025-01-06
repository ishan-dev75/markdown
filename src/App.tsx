import React from "react";
import ThemeProvider from "./theme/ThemeProvider";
import HomePage from "./pages/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
