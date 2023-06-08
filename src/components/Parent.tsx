import React, {
  useState,
  useRef,
  useImperativeHandle,
  useCallback,
  useDebugValue,
} from "react";
const useInput = () => {
  const [state, setState] = useState("");
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  useDebugValue(`Input: ${state}`);
  return [state, onChange] as const;
};

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date();
      const message = `Hello It's ${date.toLocaleDateString()} now`;
      setMessage(message);
    },
  }));

  return <div>{message !== null ? <p>{message}</p> : null}</div>;
});

const Input = () => {
  const [text, onChangeText] = useInput();
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  );
};

const Parent = () => {
  const childRef = useRef<{ showMessage: () => void }>(null);
  const onClick = () => {
    if (childRef.current !== null) {
      childRef.current.showMessage();
    }
  };
  return (
    <div>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
      <Input />
    </div>
  );
};

export default Parent;
