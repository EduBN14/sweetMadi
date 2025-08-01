import type { ImgProps } from "../../models/img_types";
 
export default function Pictures({ src, alt = "" }: ImgProps) {
  return (
    <div className="w-full aspect-square overflow-hidden flex rounded-2xl">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
