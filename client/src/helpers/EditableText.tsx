import { ChangeEvent, KeyboardEvent, FC, useState, useEffect } from "react";

interface EditableTextProps {
  initialText: string;
  isInitialEdit: boolean;
  onSave: (text: string) => void;
}

const EditableText: FC<EditableTextProps> = ({
  isInitialEdit,
  initialText,
  onSave
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(isInitialEdit);
  const [text, setText] = useState<string>(initialText);

  useEffect(() => {
    setIsEditing(isInitialEdit);
  }, [isInitialEdit]);

  const handleDoubleClick = (): void => setIsEditing(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleBlur = (): void => {
    onSave(text);
    setIsEditing(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      onSave(text);
      setIsEditing(false);
    }
  };

  return (
    <div className="w-full" onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          className="outline-none w-full"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default EditableText;
