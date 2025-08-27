import { Button } from "@/components/ui/button"; // Import the Button we just added
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle"; // <-- Import

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/">
          <p className="font-bold">DocBridge</p>
        </Link>

        <div className="flex w-32 justify-end gap-3">
          <Button>Login</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
