function Practice(props) {
  console.log(props);

  return (
    <div>
      {props.dataProp.map((item, key) => {
        return (
          <div
            style={
              key === props.clickedIndexProp
                ? { color: item.value }
                : { color: "black" }
            }
            key={key}
            onClick={() => props.clickHandlerProp(key)}
          >
            <p>The color is {item.color}</p>
            <p>The value is {item.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Practice;
