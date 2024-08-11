import styled from "styled-components";

export default function SignUp() {
  return (
    <Parent>
      <InputsCon>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Repeat Password" />
        <input type="file" />
      </InputsCon>
    </Parent>
  );
}

const Parent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f7;
`;
const InputsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: #fff;
`;
