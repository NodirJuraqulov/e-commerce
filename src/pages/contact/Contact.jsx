import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="mt-25">Contact</div>;
};

export default React.memo(Contact);
