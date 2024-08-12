import styled from "styled-components";

export default function SignUp() {
  return (
    <Parent>
      <form style={{ width: "100%" }}>
        <InputsCon>
          <InputStyles type="text" placeholder="First Name" />
          <InputStyles type="text" placeholder="Last Name" />
          <InputStyles type="text" placeholder="Username" />
          <InputStyles type="text" placeholder="Email" />
          <InputStyles type="text" placeholder="Password" />
          <InputStyles type="text" placeholder="Repeat Password" />
          <InputStyles type="file" />
          <Btn>Register</Btn>
        </InputsCon>
      </form>
    </Parent>
  );
}
const Btn = styled.button`
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  color: #fff;
  border-radius: 8px;
  padding: 1.5rem 0;
  border: none;
  background-color: #121212;
  margin-top: 2.4rem;
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;
const InputStyles = styled.input`
  color: var(--Gray, #808080);
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 1.5rem 0 1.5rem 2rem;
  border: none;
  border-bottom: 1px solid #121212;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
`;
const Parent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f7;
  padding: 10rem 2.4rem;
`;
const InputsCon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0 2.4rem 2.4rem 2.4rem;
`;
