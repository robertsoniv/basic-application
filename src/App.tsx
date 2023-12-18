import { Center, Grid, GridItem, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./features/common/components/Header";
import Navigation from "./features/common/components/Navigation";
import {
  ALLOW_ANONYMOUS,
  BASE_API_URL,
  CLIENT_ID,
  CUSTOM_SCOPE,
  SCOPE,
} from "./features/domains/ordercloud/constants";
import OrderCloudProvider from "./features/domains/ordercloud/provider";
import GlobalLoadingIndicator from "./features/common/components/GlobalLoadingIndicator";

function App() {
  return (
    <OrderCloudProvider
      baseApiUrl={BASE_API_URL}
      clientId={CLIENT_ID}
      scope={SCOPE}
      customScope={CUSTOM_SCOPE}
      allowAnonymous={ALLOW_ANONYMOUS}
    >
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 50px"}
        gridTemplateColumns={"300px 1fr"}
        h="100vh"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"header"} zIndex={2} shadow="md">
          <Header />
        </GridItem>
        <GridItem area={"nav"} zIndex={1} shadow="lg" bg="blackAlpha.100">
          <Navigation />
        </GridItem>
        <GridItem area={"main"} overflowY="scroll" overflowX="hidden">
          <Outlet />
        </GridItem>
        <GridItem as={Center} area={"footer"} bg="blackAlpha.50">
          <Text fontWeight="normal" fontSize="sm">© Sitcore Inc. 2024</Text>
        </GridItem>
      </Grid>
      <GlobalLoadingIndicator/>
    </OrderCloudProvider>
  );
}

export default App;
