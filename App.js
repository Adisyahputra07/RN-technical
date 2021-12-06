import React from "react";
import { NativeBaseProvider } from "native-base";
import Nav from "./src/Nav";
import Main from "./src/Main";

export default function App() {
  return (
    <NativeBaseProvider>
      <Nav />
      <Main />
    </NativeBaseProvider>
  );
}
