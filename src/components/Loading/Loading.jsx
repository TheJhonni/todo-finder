import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div>
      <p>Redirecting you to login Page</p>
      <h3>in {count} seconds</h3>
    </div>
  );
}

export default Loading;
