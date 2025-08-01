import type { ImgProps } from "../../models/img_types";

export default function Img ({ src, alt = ""}: ImgProps) {
  return <img src={src} alt={alt} />;
}