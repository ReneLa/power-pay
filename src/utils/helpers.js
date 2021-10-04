import * as React from "react";

export const testUrl = "http://176.58.101.178:8080/api/v1";

export const imageUrl = "http://176.58.101.178:8080";

export const navigationRef = React.createRef();
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
