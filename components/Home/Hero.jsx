import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-6 space-y-10  ">
      <Image src={"/images/coin-1.png"} alt="coin" width={100} height={100} />
      <h2 className="text-5xl font-beatrice">Headering </h2>
    </section>
  );
}
