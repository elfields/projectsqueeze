import BaseModal from "../BaseModals/BaseModal";

const PasswordResetEmailSentModal = ({ setScreen, onClose }) => {
    return (
        <BaseModal onClose={onClose}>
            <h3 className="centred-modal-title">Email Sent!</h3>
            <p>
                You will receive an email if your address is<br></br>
                associated with an account at Squeeze shortly.<br></br><br></br>
                Please follow the instructions in the email to<br></br>
                continue to reset your password.
            </p>
            {/* Password Reset Button will take user to next password reset 
                    screen as a demonstration, so that this flow can be seen as a 'mock' environment */}
            <button onClick={() => setScreen('resetConf')} className="button">Close</button>
        </BaseModal>
    )
}
export default PasswordResetEmailSentModal;
