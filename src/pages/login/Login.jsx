
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./style";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router";
import CardProvider, { useCardContext } from "../../context/CardProvider";

const Login = () => {
  const navigate = useNavigate();


  const { name, pass, setPass, setName } = useCardContext(CardProvider);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("username", name);
    localStorage.setItem("password", pass);

    navigate("/");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"< Cihan / >"}Recipe App</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
