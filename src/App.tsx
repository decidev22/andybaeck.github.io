import React, { useState, useEffect } from "react";
import styles from "./style";

import {
  Nav_Bar,
  Main_Page,
  About_Me,
  Project,
  Blog,
  Contact,
  Footer,
  Content_Layout,
  Loading_Screen,
} from "./components/index";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  return <div>{isLoading ? <Loading_Screen /> : <Content_Layout />}</div>;
};

export default App;
