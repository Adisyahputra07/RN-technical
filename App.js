import React from "react";
import { NativeBaseProvider } from "native-base";
import CallingApi from "./src/Main";
import Nav from "./src/Nav";

export default function App() {
  return (
    <NativeBaseProvider>
      <Nav />
      <CallingApi />
    </NativeBaseProvider>
  
}
