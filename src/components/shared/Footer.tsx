import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex-center flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <p className="font-bold">DocBridge</p>
        </Link>

        <p>2025 DocBridge. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
