import styled from "@emotion/styled";

const Text = styled.div`
  background-color: #ff0000b7;
  color: white;
  padding: 8px;
  font-size: 20px;
  font-weight: 700;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
`;

const Alert = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Alert;
