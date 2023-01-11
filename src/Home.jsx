import Clock from "./Clock";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center ">
      <Clock cityKey="stockholm" />
      <Clock cityKey="london" />
      <Clock cityKey="newYork" />
      <Clock cityKey="sydney" />
    </div>
  );
}
