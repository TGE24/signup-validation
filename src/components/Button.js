import React from "react";
import ButtonBlock from "../styles/ButtonBlock";
import Loader from "./Loader";

const Button = ({ loading, label, icon, children, ...rest }) => {
  return (
    <ButtonBlock {...rest} aria-label={label}>
      {loading ? (
        <Loader color="#fff" size={15} />
      ) : (
          <>
            {icon}
            {children}
          </>
        )}
    </ButtonBlock>
  );
};

export default Button;
