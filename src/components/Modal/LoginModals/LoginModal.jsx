import { Link } from "react-router-dom";
import BaseModal from "../BaseModals/BaseModal";

function LoginModal({ setScreen, onClose }) {
    return (
        <BaseModal
            header={< div className="login-switcher" >
                <button onClick={() => setScreen("login")} className="login-selected">
                    Login
                </button>
                <button onClick={() => setScreen("account")} className="create-tab">
                    Create an Account
                </button>
            </div >}
            onClose={onClose}
        >
            <h3 className="centred-modal-title">Account Login</h3>
            {/* Login form */}
            {/* Data isn't being stored, this is a mock-concept */}
            <form className="login-input-boxes">
                <input type="text" className="input-field" name="emailAddress"
                    placeholder="Enter your email address..." />

                <input type="password" className="input-field" name="password"
                    placeholder="Enter your password..." />
            </form>
            {/* Password Reset Button which leads to Password Reset Modal Journey */}
            <button title="Easy-peasy lemon squeezy" onClick={() => setScreen("resetInitial")} className="password-reset-link">
                Reset Password
            </button>
            {/* Login Button which leads to User/Account Settings Page */}
            <Link to="/user" onClick={onClose}>
                <button className="button">Login</button>
            </Link>
        </BaseModal>
    )
}
export default LoginModal;
