import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">{children}</Container>
    </React.Fragment>
  );
};

export default Layout;
