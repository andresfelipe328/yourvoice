import React from "react";

type Props = {
  children: React.ReactNode;
};

const SessionProvider = ({ children }: Props) => {
  return (
    <main
      id="main-website-container"
      className="h-screen flex flex-col overflow-auto"
    >
      {children}
    </main>
  );
};

export default SessionProvider;
