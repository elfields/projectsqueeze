import BaseModal from "../BaseModals/BaseModal";

const PasswordResetInitialModal = ({ setScreen, onClose }) => {
    return (
        <BaseModal onClose={onClose}>
            <h3 className="centred-modal-title">Password Reset Request</h3>
            <p>
                You will receive an email to the address associated<br></br>
                with your  account with a link to reset your password.<br></br><br></br>
                To confirm, please enter the email address<br></br>
                for your account below:
            </p>
            {/* Password Reset form to request email address*/}
            {/* Data is not stored anywhere, this is mock only */}
            <form>
                <input type="text" className="input-field" name="emailAddress" placeholder="Enter your email address..." />
            </form>
            {/* Button will go to modal that confirms an email will be sent to user after clicked */}
            {/* This is a mock feature, and will not initiate an email being sent to user */}
            <button type="submit" onClick={() => setScreen('resetEmail')} className="button">Send Email</button>
        </BaseModal>
    )
}
export default PasswordResetInitialModal;
