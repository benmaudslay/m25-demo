export const Card = ({ children, rmFunction }) => {
  return (
    <li className="card">
      <span>{children}</span>
      <button onClick={rmFunction}>X</button>
    </li>
  );
};
