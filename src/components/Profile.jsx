import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    } else {
      setUserData(user);
    }
  }, [navigate]);

  const handleEditClick = (field) => {
    setIsEditing(field);
  };

  const handleSaveClick = (field, newValue) => {
    const updatedUser = { ...userData, [field]: newValue };
    setUserData(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(null);
  };

  const renderEditableField = (field, value) => {
    return (
      <div className="mb-3">
        <h5>{field.charAt(0).toUpperCase() + field.slice(1)}:</h5>
        {isEditing === field ? (
          <div className="d-flex">
            <input
              type="text"
              className="form-control bg-dark text-white border-light"
              defaultValue={value}
              id={`edit-${field}`}
            />
            <button
              className="btn btn-outline-success btn-sm ms-2"
              onClick={() =>
                handleSaveClick(
                  field,
                  document.getElementById(`edit-${field}`).value
                )
              }
            >
              Save
            </button>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <p>{value}</p>
            <button
              className="btn btn-outline-warning btn-sm"
              onClick={() => handleEditClick(field)}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    );
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-3 py-3 bg-dark text-white">
      <h1 className="text-center">Profile</h1>
      <hr className="text-white" />
      <div className="my-3">
        {renderEditableField("name", userData.name)}
        {renderEditableField("email", userData.email)}
        {renderEditableField("phone", userData.phone)}
        {renderEditableField("address", userData.address)}

        <div className="text-center mt-4">
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
