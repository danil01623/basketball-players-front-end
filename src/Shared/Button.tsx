import classes from "../styles/Shared.module.css";

interface ButtonInterface {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonInterface) => {
  const { text, onClick } = props;

  return (
    <button onClick={onClick} className={classes.button}>
      {text}
    </button>
  );
};

export default Button;
