import React, { useState, useEffect } from "react";
import UserInfo from '../../components/UserPageFeatures/UserInfo';
import SavedForLater from '../../components/UserPageFeatures/SavedForLater';
import MyFavourites from '../../components/UserPageFeatures/MyFavourites';
import ListenHistory from '../../components/UserPageFeatures/ListenHistory';
import Following from '../../components/UserPageFeatures/Following';
import PhotoUploadModal from '../../components/Modal/AccountModals/PhotoUploadModal';

function User() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [openModal, setOpenModal] = useState(false);

    function openUploadPhotoModal() {
        setOpenModal(true)
    };

    function closeModal() {
        setOpenModal(false)
    };

    return (
        <div className="user-background-container">

            <UserInfo onClick={openUploadPhotoModal} />
            <SavedForLater />
            <PhotoUploadModal onClose={closeModal} open={openModal} />
            <MyFavourites />
            <ListenHistory />
            <Following />

        </div>
    )
};
export default User;