import { detailsMultiView } from "../style";

export default function Card({ item }: any) {
  return (
    <>
      <div className={detailsMultiView}>
        <h1 className="">{item.id}</h1>
        <h1 className="">{item.title}</h1>
      </div>
    </>
  );
}
