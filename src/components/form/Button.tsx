import { styled } from '../../theme';

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  border: none;
  color: ${(props) => props.theme.colors.light};
  font-size: 1.4rem;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

export default Button;
