export interface PriceTextProps {
  className?: string;
  price: number;
}

const PriceText = ({ className = "", price = 0 }: PriceTextProps) => {
  return (
    <p className={className}>
      {Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)}
    </p>
  );
};

export default PriceText;
