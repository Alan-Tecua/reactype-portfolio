import { left } from "@cloudinary/url-gen/qualifiers/textAlignment";

interface CareerItem {
  item: { id: number, title: string, subtitle: string, period: string}
}
function CareerItems({item}: CareerItem) {
  const side = item.id % 2 === 0 ? "right" : "left";
  return (
    <>
    {side === "left" && (
      <div className="background__data" key={item.id}>
          <div>
            <h3 className="background__title">{item.title}</h3>
            <span className="background__subtitle">{item.subtitle}</span>
            <div className="background__calendar">
              <i className="uil uil-calendar-alt"></i> {item.period}
            </div>
          </div>
        <div>
          <span className="background__rounder"></span>
          <span className="background__line"></span>
        </div>
      </div>
    )}

    {side === "right" && (
      <div className="background__data" key={item.id}>
        <div></div>
        <div>
          <span className="background__rounder"> </span>
          <span className="background__line"></span>
        </div>

          <div>
            <h3 className="background__title">{item.title}</h3>
            <span className="background__subtitle">{item.subtitle}</span>
            <div className="background__calendar">
              <i className="uil uil-calendar-alt"></i> {item.period}
            </div>
          </div>
      </div>
    )}


    </>
  );

}

export default CareerItems;
