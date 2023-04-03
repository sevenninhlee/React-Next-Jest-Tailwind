import { useState, useRef, useEffect } from "react";

type PinInputProps = {
  length?: number;
  secretMode?: boolean;
  secretModePlaceholder?: string;
  inputClassName?: string;
  containerClassName?: string;
  onComplete?: (pin: string) => void;
  boxRegex?: RegExp;
  defaultValue?: string[];
};

const PinInput: React.FC<PinInputProps> = ({
  length = 5,
  secretMode = false,
  secretModePlaceholder = "*",
  inputClassName = "",
  containerClassName = "",
  onComplete = () => {},
  boxRegex = /^[0-9]*$/,
  defaultValue = new Array(length).fill(""),
}) => {
  const [pin, setPin] = useState(defaultValue);
  const [isSecretMode, setIsSecretMode] = useState(secretMode);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    new Array(length).fill(null)
  );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (boxRegex.test(value) && value.length <= 1) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      if (index < length - 1 && value !== "") {
        const nextInput = inputRefs.current[index + 1];
        if (boxRegex.test(nextInput?.value ?? "")) {
          nextInput?.focus();
        }
      } else if (index === length - 1 && value !== "") {
        onComplete(newPin.join(""));
      }
    }
  };

  const handleSecretModeToggle = () => {
    setIsSecretMode((prevIsSecretMode) => !prevIsSecretMode);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");
    const pastedDigits = pastedData.split("").slice(0, length);
    const newPin = [...pin];
    pastedDigits.forEach((digit, index) => {
      if (boxRegex.test(digit)) {
        newPin[index] = digit;
      }
    });
    setPin(newPin);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className={`${containerClassName}`}>
      <div
        className={`flex flex-wrap justify-center items-center gap-3 ${containerClassName}`}
      >
        {pin.map((digit, index) => (
          <input
            key={index}
            className={`border-2 border-gray-300 rounded-lg px-2 py-1 w-10 h-10 text-center text-2xl font-bold focus:outline-none ${inputClassName}`}
            type={isSecretMode ? "password" : "text"}
            maxLength={1}
            autoComplete="new-password"
            value={isSecretMode ? secretModePlaceholder : digit}
            onChange={(e) => handleChange(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            onPaste={handlePaste}
            aria-label="digit input"
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className={`text-blue-500 text-sm font-medium border px-3 rounded-md py-2 ${
            isSecretMode
              ? "text-opacity-50 hover:text-opacity-100"
              : "hover:bg-blue-50"
          }`}
          onClick={handleSecretModeToggle}
        >
          {isSecretMode ? "Disable Secret Mode" : "Enable Secret Mode"}
        </button>
      </div>
    </div>
  );
};

export default PinInput;
