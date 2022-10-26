import Mascot from '../../../assets/UploadPhotoPlaceholder.png';
import BaseModal from "../BaseModals/BaseModal";

const PhotoUploadModal = (props) => {

    if (!props.open)
        return null

    return (

        <BaseModal onClose={props.onClose}>
            <h3 className="centred-modal-title">Upload your Avatar here!</h3>
            <img className="image-placeholder" src={Mascot} title="Our Mascot: Kobi" alt="Close up of nose of a black and white dog, who is our Mascot" />
            <input type="file" className="image-input-field" />
            <button className="button" onClick={props.onClose}>
                Upload!
            </button>
        </BaseModal>
    )
};

export default PhotoUploadModal;