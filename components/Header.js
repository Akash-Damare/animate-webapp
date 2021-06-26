import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between md:justify-around text-center">
      <h1 className="text-4xl font-light mx-auto sm:mx-0 sm:ml-5 md:m-0">
        Animate
      </h1>
      <div className="font-semibold hidden md:inline-flex">
        <ul className="flex gap-4">
          <li className="bottom-border">
            <a href="/Home">Home</a>
          </li>
          <li className="bottom-border">
            <a href="/Search">Search</a>
          </li>
          <li className="bottom-border">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
      <div className="bg-an_theme-dark py-4 px-6 border-b-4 border-an_theme-dark transition duration-500 hover:border-an_theme-light hidden sm:inline-flex">
        <a href="./">Contact</a>
      </div>
    </div>
  );
}

export default Header;
