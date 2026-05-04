import { useEffect, useState } from "react";

import { useGeolocation } from "./hooks/useGeolocation";

import Container from "./ui/Container";
import Loading from "./ui/Loading";

import Forecast from "./features/forecast/Forecast";
import Home from "./features/home/Home";
import { Outlet, useNavigation } from "react-router";

function App() {
  const navigation = useNavigation();
  const isLoading = Boolean(navigation.location);

  return <Container>{isLoading ? <Loading /> : <Outlet />}</Container>;
}

export default App;
