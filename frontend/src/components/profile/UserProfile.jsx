import React from "react";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function UserProfile() {
  const handleLogout = () => {};

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        {/* <AccountCircleIcon sx={{ fontSize: "9rem" }} /> */}
        <h1>Code with Nduka</h1>
        <p className="py-4 text-2xl font-semibold">
          Email: idokobryan01@gmail.com
        </p>
        <Button
          variant="contained"
          onClick={handleLogout}
          sx={{ margin: "2re, 0rem" }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default UserProfile;
