import "./btn.scss";
type props = {
  btnText: string;
  btnType: string;
  btnSubText?: boolean | string;
};
export const Btn = ({ btnText, btnType, btnSubText = false }: props) => (
  <>
    {!btnSubText && <button className={`btn ${btnType}`}>{btnText}</button>}
    {btnSubText && (
      <button className={`btn ${btnType}`}>
        {btnText} <div className="btn-sub">{btnSubText}</div>{" "}
      </button>
    )}
  </>
);
