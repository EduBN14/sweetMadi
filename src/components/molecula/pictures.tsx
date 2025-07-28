import type { ImgProps } from "../../models/img_types";
 
export default function Pictures({ src, alt = "" }: ImgProps) {
  return (
    <div className="w-80 h-80 overflow-hidden flex items-center justify-center rounded-2xl mx-auto">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
