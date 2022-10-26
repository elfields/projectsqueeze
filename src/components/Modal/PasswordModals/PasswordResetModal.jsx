import BaseModal from "../BaseModals/BaseModal";

const PasswordResetConfirmModal = ({ setScreen, onClose }) => {
    return (
        <BaseModal onClose={onClose}>
            <h3 className="centred-modal-title">Password Reset</h3>
            <p>
                To reset your password, please create a new password<br></br>
                and confirm:
            </p>
            {/* Password Reset form to request email address*/}
            {/* Data is not stored anywhere, this is mock only */}
            <form>
                <input type="password" className="input-field" name="createPassword"
                    placeholder="Create a new password..." />

                <input type="password" className="input-field" name="confirmPassword"
                    placeholder="Confirm your password..." />
            </form>
            {/* Password Reset Button will go to login modal after clicked */}
            <button type="submit" onClick={() => setScreen('login')} className="button">Reset</button>
        </BaseModal>
    )
}
export default PasswordResetConfirmModal;
