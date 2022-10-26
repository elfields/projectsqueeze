import { Link } from "react-router-dom";
import BaseModal from "../BaseModals/BaseModal";

function AccountCreateModal({ setScreen, onClose }) {
    return (
        <BaseModal
            header={
                <div className="login-switcher">
                    <button onClick={() => setScreen("login")} className="login-tab">
                        Login
                    </button>
                    <button onClick={() => setScreen("account")} className="create-selected">
                        Create an Account
                    </button>
                </div>
            }
            onClose={onClose}
        >
            <h3 className="centred-modal-title">Account Creation</h3>
            {/* Account Creation form */}
            {/* Data isn't being stored, this is a mock-concept */}
            <form>
                <input type="text" className="input-field" name="name"
                    placeholder="Enter your Full Name..." />
                <input type="text" className="input-field" name="emailAddress"
                    placeholder="Enter your email address..." />
                <input type="password" className="input-field" name="createPassword"
                    placeholder="Create a password..." />
                <input type="password" className="input-field" name="confirmPassword"
                    placeholder="Confirm your password..." />
                {/* Checkbox for user terms and conditions */}
                <div className="terms-container">
                    <input type="checkbox" className="terms-checkbox" name="terms" />
                    I agree to Squeeze's
                    <a href='/' title="ex-Squeeze Me?" className="terms-conditions-link">
                        Terms and Conditions
                    </a>
                </div>
                {/* Sign Up Button which leads to User/Account Settings Page */}
                <Link to="/user" onClick={onClose}>
                    <button className="button">Sign Up</button>
                </Link>
            </form>
        </BaseModal >
    )
};
export default AccountCreateModal;
