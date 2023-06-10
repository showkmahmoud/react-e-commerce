export interface Props {
  btnClass: any;
  onClickBtn: () => void;
}
const Button = ({ btnClass, onClickBtn }: Props) => {
  return (
    <>
      <button className={btnClass} onClick={onClickBtn}>
        Add To Cart
      </button>
    </>
  );
};

export default Button;
