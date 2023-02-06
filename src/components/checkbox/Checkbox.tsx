import { StyledCheckbox } from "./styles";

interface Props {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<Props> = ({ checked, onChange }) => {
  return <StyledCheckbox checked={checked} onChange={onChange} />;
};

export default Checkbox;
