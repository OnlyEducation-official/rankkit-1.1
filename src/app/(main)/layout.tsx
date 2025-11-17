import React from 'react';

function Layout({
  children,
  header,
  footer,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}

export default Layout;
