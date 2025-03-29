import Image from 'next/image';

export default function Header() {
  return (
    <header>
      {"/images/placeholder-logo.jpg"}
      <Image src="/images/actual-logo.png" alt="Site Logo" width={100} height={50} />
    </header>
  );
}
