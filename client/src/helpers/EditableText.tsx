import {
  ChangeEvent,
  KeyboardEvent,
  FC,
  useState,
  useEffect,
  useRef
} from "react";

interface EditableTextProps {
  initialText: string;
  isInitialEdit: boolean;
  onSave: (text: string) => void;
  useTextarea?: boolean;
  styles?: string;
  disabled?: boolean;
}

const EditableText: FC<EditableTextProps> = ({
  isInitialEdit,
  initialText,
  onSave,
  styles,
  disabled = false,
  useTextarea = false
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(isInitialEdit);
  const [text, setText] = useState<string>(initialText);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setIsEditing(isInitialEdit);
  }, [isInitialEdit]);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.selectionStart = textareaRef.current.value.length;
      textareaRef.current.selectionEnd = textareaRef.current.value.length;
    }
  }, [isEditing]);

  const handleDoubleClick = (): void => setIsEditing(true);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setText(event.target.value);
  };

  const handleBlur = (): void => {
    onSave(text);
    setIsEditing(false);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (event.key === "Enter") {
      onSave(text);
      setIsEditing(false);
    }
  };

  return (
    <div className={styles} onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        useTextarea ? (
          <textarea
            value={text}
            ref={textareaRef}
            className="outline-none w-full h-36"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={text}
            className="outline-none w-full"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
            autoFocus
          />
        )
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default EditableText;
