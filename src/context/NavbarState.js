import AllSuperContext from "./AllSuperContext";
import React, { useState } from "react";

const NavbarState = (props) => {
  let random = Math.random();
  let d = random.toPrecision();
  let uniq_id = d.substr(2);
  const [searchValue, setSearchValue] = useState({});

  let handleOnChange = (e) => {
    setSearchValue({
      ...searchValue,
      id: uniq_id,
      [e.target.name]: e.target.value,
    });
  };

  const allData = {
    handleOnChange,
    searchValue,
    setSearchValue,
  };

  return (
    <>
      <AllSuperContext.Provider value={allData}>
        {props.children}
      </AllSuperContext.Provider>
    </>
  );
};

export default NavbarState;
