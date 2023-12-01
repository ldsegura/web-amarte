import React from "react";
const BoxDeveloper = () => {
  return (
    <div className="content-by">
      <p
        style={{ paddingTop: "30px", fontSize: "16px" }}
      >{`${new Date().getFullYear()} © ${process.env.NEXT_PUBLIC_SITENAME} Developers`}</p>
    </div>
  );
};

export default BoxDeveloper;
