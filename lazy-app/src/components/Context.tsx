import React from "react";
import { ColorSchemeName } from "react-native";

export const Context = React.createContext<{theme: { value: ColorSchemeName, toggle: Function}}>({theme: {value: "dark", toggle: () => {}}});

