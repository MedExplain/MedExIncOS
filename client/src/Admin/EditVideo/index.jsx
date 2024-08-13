import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";
import EditVideo from "components/EditVideo";
import { isUserAuthenticated } from "utils/msal";
import { handleLogin } from "utils/authUtils";

const EditVideos = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Redirect to login if not authenticated
        if (!isUserAuthenticated()) {
            handleLogin(location.pathname);
        }
    }, [navigate, location]); // React to changes in authentication state or location

    // If there is no account, return null immediately
    if (!isUserAuthenticated()) {
        return null;
    }

    // Display the editor only if the user is authenticated
    return (
        <>
            <EditVideo />
        </>
    );
};

export default EditVideos;
