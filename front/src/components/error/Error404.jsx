import React from "react";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();

  navigate("/home");

  return (
    <img
      src="https://images.squarespace-cdn.com/content/v1/5a553ed8c027d8cb5b2b6aeb/1519712033920-XTR6HWA3IQLCRTHLB46I/404error+message.jpg"
      alt="error"
    />
  );
}

export default Error404;
