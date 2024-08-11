import styled from "styled-components";

export default function Login() {
  return (
    <Parent>
      <InputsCon>
        <UsernameInput type="text" placeholder="username" />
        <PasswordInput type="text" placeholder="password" />
        <TexstCon>
          <ForgotAndRestoreCon>
            <ForgotPassworsSpan>forgot password?</ForgotPassworsSpan>
            <RestorePasswordSpan>restore now</RestorePasswordSpan>
          </ForgotAndRestoreCon>
          <DonotHaveAcountCon>
            <DonotHaveAcountP>Do not have an account?</DonotHaveAcountP>
            <SignUpSpan>Sign up</SignUpSpan>
          </DonotHaveAcountCon>
        </TexstCon>
      </InputsCon>
    </Parent>
  );
}
const DonotHaveAcountCon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3%;
`;
const ForgotAndRestoreCon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3%;
`;
const SignUpSpan = styled.span`
  color: red;

  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-decoration: underline;
`;
const DonotHaveAcountP = styled.p`
  color: var(--Gray, #808080);

  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

const RestorePasswordSpan = styled.span`
  text-decoration: underline;
  color: red;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
const ForgotPassworsSpan = styled.span`
  color: var(--Gray, #808080);

  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
const TexstCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const PasswordInput = styled.input`
  color: var(--Gray, #808080);
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 4px;
  padding: 1.5rem 0 1.5rem 2rem;
  border: none;
  border-bottom: 1px solid #121212;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
`;
const UsernameInput = styled.input`
  color: var(--Gray, #808080);
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 4px;
  padding: 1.5rem 0 1.5rem 2rem;
  border: none;
  border-bottom: 1px solid #121212;
  outline: none;

  &::placeholder {
    opacity: 0.5;
  }
`;
const InputsCon = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: #fff;
`;
const Parent = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #f5f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
