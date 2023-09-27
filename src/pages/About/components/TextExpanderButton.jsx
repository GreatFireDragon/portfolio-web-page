function TextExpanderButton({ children, textStyle, onClick }) {
  return (
    <div style={textStyle} onClick={onClick} role="button">
      {children}
    </div>
  );
}

export default TextExpanderButton;
