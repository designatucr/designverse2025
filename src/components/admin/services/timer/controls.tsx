import { Trash2, Pen, Check } from "lucide-react";

type props = {
  edit: boolean;
  setEdit: (value: boolean) => void;
  onRemove: () => void;
};

const Controls = ({ edit, setEdit, onRemove }: props) => {
  return (
    <div className="flex gap-4">
      {edit && (
        <>
          <Check
            onClick={() => setEdit(false)}
            className="hover:cursor-pointer"
          />
          <Trash2 onClick={onRemove} className="hover:cursor-pointer" />
        </>
      )}

      {!edit && (
        <>
          <Pen onClick={() => setEdit(true)} className="hover:cursor-pointer" />
          <Trash2 onClick={onRemove} className="hover:cursor-pointer" />
        </>
      )}
    </div>
  );
};
export default Controls;
