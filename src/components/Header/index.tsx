import React from "react";

interface HeaderProps {
  title: String;
}

function Header({ title }: HeaderProps) {
  return <h1>{title}</h1>;
}

export default Header;
