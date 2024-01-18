import React from "react";
import "./Checkbox.css";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from "@react-spring/web";
function Checbox({ checked, handleChecked, text }) {
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: checked ? "#9f0e0f" : "#fff",
    borderColor: "#9f0e0f",
    borderRadius: "4px",
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const [checkmarkLength, setCheckmarkLength] = React.useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: checked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    checked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );
  return (
    <label className="text-agree-terms">
      <input type="checkbox" checked={checked} onChange={handleChecked} />
      <animated.svg
        style={checkboxAnimationStyle}
        className={`checkbox ${checked ? "checkbox--active" : ""}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <animated.path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke="#fff"
          ref={(ref) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimationStyle.x}
        />
      </animated.svg>
      {text}
    </label>
  );
}

export default Checbox;
