import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <div className="flex gap-5">
      <Link href={"/"}>home</Link>
      <Link href={"/landingpage"}>landingpage</Link>
      <Link href={"/dashboard"}>dashboard</Link>
    </div>
  );
}

export default Menu;
