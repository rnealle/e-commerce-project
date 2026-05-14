import Link from "next/link";
import Button from "../button";
import RightArrowIcon from "../icons/right-arrow-icon";

const HeroBanner = () => {
  return (
    <div className="py-24 w-full bg-red-50">
      <div className="max-w-[1440px] px-8 flex flex-col gap-y-4 mx-auto">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="">This is a test description.</p>
        <Button className="grow-0 !w-[max-content] gap-4" href="/products">
          Product List
          <RightArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
