import Checkbox from "@/components/checkbox";
import { useState } from "react";
type props = {
  options: string[];
  toggle: boolean;
  onClick: () => void;
};

const Terms = ({ options, toggle, onClick }: props) => {
  const [checkedState, setChecked] = useState(toggle);

  const onClickWithCheckBox = () => {
    onClick();
    setChecked(!checkedState);
  };

  return (
    <>
      <p className="mb-1 mt-3 font-semibold">
        Terms and Conditions
        <span className="text-red-500">*</span>
      </p>
      <ul className="mb-4 list-disc pl-5 text-sm">
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>

      <Checkbox id="terms" checked={checkedState} onClick={onClickWithCheckBox}>
        By selecting this I agree to all of the above terms
      </Checkbox>
    </>
  );
};

export default Terms;
