import Link from "next/link";
import ProfileIcon from "../icons/profile-icon";
import MenuIcon from "../icons/menu-icon";
import CartIcon from "../icons/cart-icon";
import HeartIcon from "../icons/heart-icon";

function Header() {
  return (
    <header className="sticky top-0 border-b border-b-(--foreground) bg-white z-999 w-full">
      <div className="max-w-[1440px] flex flex-row place-content-between gap-4 p-4 mx-auto">
        <Link href={"/"} className="text-4xl font-bold">
          LOGO
        </Link>
        <div className="md:hidden">
          <MenuIcon className="size-8" />
        </div>
        <nav className="hidden md:flex mt-auto gap-4">
          <HeartIcon className="size-8" />
          <Link href={"/cart"}>
            <CartIcon className="size-8" />
          </Link>
          <ProfileIcon className="size-8" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
