function Square(props) {
  // console.log(props)
  return (
    <div className="square" onClick={props.onSquareClick}>
      <p>{props.value}</p>
    </div>
  );
}

export default Square;
