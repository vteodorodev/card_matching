import React from "react";

import { HeaderProps } from "../../types";

function Header({ title }: HeaderProps) {
  return <h1>{title}</h1>;
}

export default Header;
