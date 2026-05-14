import Image from "next/image";

export interface ImageCardProps {
  src: string;
}

const ImageCard = ({ src }: ImageCardProps) => {
  return (
    <div className="relative aspect-square w-full bg-[#eee] rounded-md border-[1px] border-[#e5e7eb]">
      <Image
        src={src}
        fill={true}
        className="object-contain p-16 w-full mix-blend-multiply"
        alt="Product Image"
      />
    </div>
  );
};

export default ImageCard;
