import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(style);
  console.log(className);
  return (
    <RightOutlined
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "28px",
      }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftOutlined
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "28px",
      }}
      onClick={onClick}
    />
  );
}
