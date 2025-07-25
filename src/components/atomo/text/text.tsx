import React from "react";

type textProps = {
  children: React.ReactNode,
  as?: "p" | "span" | "small" | "label" | "strong",
    className?: string,
 }; 


 export default function Text({
  children,
  as = "p",
  className = "",  
}: textProps) {
    const Tag = as;

  return (
    <Tag className={`text ${className}`}>
      {children}
    </Tag>
  );
}