import React from "react";
export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <span>This would be displayed at the top</span>
      <article>{children}</article>
    </div>
  );
};
