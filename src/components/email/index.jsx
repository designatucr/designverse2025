import Acceptance from "./acceptance";
import Confirmation from "./confirmation";
import Rejection from "./rejection";

const Email = ({ id, name, position, preview }) => {
  if (id === "confirmation")
    return <Confirmation name={name} position={position} preview={preview} />;
  if (id === "acceptance")
    return <Acceptance name={name} position={position} preview={preview} />;
  if (id === "rejection")
    return <Rejection name={name} position={position} preview={preview} />;
};

export default Email;
