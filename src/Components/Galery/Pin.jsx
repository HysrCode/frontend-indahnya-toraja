import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Pin = (props) => {
  const navigate = useNavigate();
  const { user, setShowLoginModal } = useAuth();

  const handleClick = () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    if (props.id) {
      navigate(`/details/${props.id}`, {
        state: { data: props.id },
      });
    }
  };

  return (
    <div className={`pin ${props.size}`} onClick={handleClick}>
      <img src={props.image} alt={props.alt || "Pin Image"} />
      {props.children && <div className="pin-content">{props.children}</div>}
    </div>
  );
};

export default Pin;
