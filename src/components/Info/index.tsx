import { InfoProps } from "./types";

function Info({ children, color }: InfoProps) {
  return (
    <div className={`soft-${color}-bg information-card`}>
      <div className="d-flex justify-content-end"></div>
      {children}
    </div>
  );
}

export default Info;
