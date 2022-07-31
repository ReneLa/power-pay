import * as React from "react";

export const testUrl = "https://thesis-powerup.herokuapp.com/api";

export const navigationRef = React.createRef();
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
