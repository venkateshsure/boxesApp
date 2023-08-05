const Box = (props) => {
  //  Write your code here.
  const { background, text } = props;
  return (
    <div className={`box ${background}`}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-con">
    <h1 className="head">Boxes</h1>
    <div className="cg-con">
      <Box background="small-box" text="small" />
      <Box background="medium-box" text="medium" />
      <Box background="large-box" text="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
