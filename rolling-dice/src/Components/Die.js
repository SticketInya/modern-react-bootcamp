import '../styles/Die.css';

const Die = (props) => {
  const nbr = ['one', 'two', 'three', 'four', 'five', 'six'];
  const animaton = props.isAnimated ? 'animated' : '';
  return (
    <i className={`Die fas fa-dice-${nbr[props.number - 1]} ${animaton}`}></i>
  );
};

export default Die;
