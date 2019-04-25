import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

const propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string
};

function Td({ children, to }) {
  // Conditionally wrapping content into a link
  const content = to ? (
    <Link className="content" to={to}>
      {children}
    </Link>
  ) : (
    <div className="content">{children}</div>
  );

  return <td>{content}</td>;
}

Td.propTypes = propTypes;

export default Td;
