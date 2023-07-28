import { detailsMultiView } from "../style";

export default function Card({ item }: any) {
  return (
    <>
      <div className={detailsMultiView}>
        <h1 className="text-red-600">{item.id}</h1>
        <h1 className="text-green-600">{item.title}</h1>
      </div>
    </>
  );
}
