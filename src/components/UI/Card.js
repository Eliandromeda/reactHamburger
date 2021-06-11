import './Card.css'

//It is a wrapper component. it is an special type of component.
const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>//children prop is a reserve name, it keep the child content
  //when it is use as a child custom component it paints the elements inside of it.
}



export default Card;