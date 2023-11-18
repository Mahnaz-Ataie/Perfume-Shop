import Back from "./CardsBack";
import Front from "./CardsFront";
export default function PerfumesCards({ perfumes }) {
  return (
    <div className="perfume-list" id>
      {perfumes.map((perfume, index) => (
        <div className="perfume" key={index}>
          <Front perfumes={perfume}></Front>
          <Back perfumes={perfume}></Back>
        </div>
      ))}
    </div>
  );
}
