import React from "react";
import { NativeBaseProvider } from "native-base";
import CallingApi from "./src/CallingApi";
import Nav from "./src/Nav";

export default function App() {
  return (
    <NativeBaseProvider>
      <Nav />
      <CallingApi />
    </NativeBaseProvider>
  );
}
