import React from "react";

interface ITypographyProps {
  h2?: boolean;
  h3?: boolean;
  children: React.ReactNode;
  disabledMargin?: boolean;
  className?: string;
  italic?: boolean;
  color?: "text-white" | "text-black" | undefined;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Typography: React.FC<ITypographyProps> = ({
  children,
  h2,
  h3,
  disabledMargin,
  italic,
  className,
  color,
  style,
  onClick,
}) => {
  const getStyles = React.useCallback(() => {
    const styles: string[] = ["typoP"];
    if (h2) styles.push("typoH2");
    if (h3) styles.push("typoH3");
    if (disabledMargin) styles.push("disabledMargin");
    if (italic) styles.push("italic");
    if (className) styles.push(className);
    if (color) {
      styles.push(color);
    } else {
      styles.push("textGris");
    }
    return styles.join(" ");
  }, [h2, h3, disabledMargin, italic, className, color]);

  return (
    <p onClick={onClick} className={getStyles()} style={style}>
      {children}
    </p>
  );
};

export default Typography;
