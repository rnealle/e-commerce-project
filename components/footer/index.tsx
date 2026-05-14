import RightArrowIcon from "../icons/right-arrow-icon";

function Footer() {
  return (
    <footer className="w-full border-t border-t-(--foreground)">
      <div className="flex flex-col gap-y-6 mx-auto max-w-[1440px] py-10 px-8">
        <div className="grid md:grid-cols-3 gap-4 w-full md:w-4/5">
          <div className="flex flex-col gap-4">
            <p className="font-bold">Get Updates</p>
            <div className="flex place-items-center gap-x-4">
              <input
                placeholder="Subscribe to Our Newsletter"
                className="bg-[#eee] rounded-md border-[1px] border-[#e5e7eb] px-4 py-3"
              />
              <RightArrowIcon />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Explore</p>
            <div className="flex flex-col gap-1">
              <p>About Us</p>
              <p>Our Story</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Customer Support</p>
            <div className="flex flex-col gap-1">
              <p>Delivery & Returns</p>
              <p>Contact Us</p>
              <p>FAQs</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-16 underline">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
