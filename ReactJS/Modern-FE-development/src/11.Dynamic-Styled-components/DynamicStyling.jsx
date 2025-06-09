import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
`;

function DynamicStyledButton() {
  return (
    <>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </>
  );
}

export default DynamicStyledButton;
