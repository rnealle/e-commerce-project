import Button from "../button";
import RightArrowIcon from "../icons/right-arrow-icon";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div
      className="relative w-full bg-red-50"
      style={{ height: "368px", overflow: "hidden" }}
    >
      <Image
        src="/images/microsoft-copilot-SQVABUT4DoM-unsplash.jpg"
        height={800}
        width={600}
        className="object-cover absolute inset-0 w-full"
        alt="Hero Banner"
      />
      <div
        className="bg-black absolute inset-0"
        style={{ opacity: ".30" }}
      ></div>
      <div className="relative max-w-[1440px] px-8 py-24 flex flex-col gap-y-6 mx-auto text-white">
        <div className="flex flex-col gap-y-4" style={{ maxWidth: "600px" }}>
          <h1 className="text-4xl font-bold">Everyday Style meets Comfort</h1>
          <p>
            From casual basics to smart everyday wear, we focus on quality,
            comfort, and timeless design to help customers feel confident
            wherever they go.
          </p>
        </div>
        <Button className="grow-0 !w-[max-content] gap-4" href="/products">
          View the Collection
          <RightArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
