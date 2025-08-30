"use client";
import Image from "next/image";

export default function VineDivider() {
  return (
    // If height is h-48, the negative margin must be -my-24 (48 / 2 = 24)
    <div className="relative w-full overflow-hidden h-60 -my-30 z-1 pointer-events-none">
      <div className="flex w-[200%] animate-vine">
        <Image
          src="/vine-divider.svg"
          alt="Vine Divider"
          width={1920}
          height={192} // 192px = 12rem = h-48
          className="w-full h-48 object-cover" // Match height with parent
        />
        <Image
          src="/vine-divider.svg"
          alt="Vine Divider Duplicate"
          width={1920}
          height={192} // 192px = 12rem = h-48
          className="w-full h-48 object-cover" // Match height with parent
        />
      </div>
    </div>
  );
}