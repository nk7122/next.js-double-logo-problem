import Image from "next/image";
import Image2 from "next/image";

export default function Logo({ className }: { className: string }) {
  return (
    <>
      <Image
        src="/logoo.svg>"
        alt="The Moon"
        width={100}
        height={100}
        className={className}
      />
      <Image
        src="/logo.svg"
        alt="A rocket to the Moon"
        width={100}
        height={100}
        className={className}
      />
      {/* <Image
        src="/logo.svg"
        alt="A rocket to the Moon"
        width={100}
        height={100}
        className={className}
      /> */}
    </>
  );
}

// gunakan props {className} untuk menghilangkan error className di page
