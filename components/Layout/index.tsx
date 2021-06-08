import React from 'react';

type props = {
  Component: any;
}

const Layout: React.FunctionComponent<props> = ({ Component, ...props }) => {
  return (
    <>
      <Component {...props} />
    </>
  )
}

export default Layout
