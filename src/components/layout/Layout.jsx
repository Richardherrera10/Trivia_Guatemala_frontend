import React from "react";
import Navbar from "./navbar/Navbar";




class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar />
        <>
          {this.props.children}
        </>
          
      </>
    );
  }
}

export default Layout;