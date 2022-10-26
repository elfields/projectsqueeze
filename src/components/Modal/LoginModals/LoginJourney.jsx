import { useState } from "react";
import LoginModal from "./LoginModal";
import AccountCreateModal from "../AccountModals/AccountCreationModal";
import PasswordResetInitialModal from "../PasswordModals/PasswordInitiateModal";
import PasswordResetEmailSentModal from "../PasswordModals/PasswordEmailModal";
import PasswordResetConfirmModal from "../PasswordModals/PasswordResetModal";

// 'Journey' to link all Login Modals together

function LoginJourney(props) {

    const [screen, setScreen] = useState('login')

    // Function to determine when modal is to be closed
    // Assigned to close buttons on modals
    // The default for button will be reset back to 'login'
    function closeLoginModal() {
        setScreen('login')
        props.onClose();
    }

    // to do nothing if there is no open prop passed
    if (!props.open)
        return null

    return (
        <>
            {/* Each modal is assigned a value for 'screen' 
            which is passed from the modals to journey for call-to-action buttons */}

            {screen === 'login' && <LoginModal setScreen={setScreen} onClose={closeLoginModal} />}
            {screen === 'account' && <AccountCreateModal setScreen={setScreen} onClose={closeLoginModal} />}
            {screen === 'resetInitial' && <PasswordResetInitialModal setScreen={setScreen} onClose={closeLoginModal} />}
            {screen === 'resetEmail' && <PasswordResetEmailSentModal setScreen={setScreen} onClose={closeLoginModal} />}
            {screen === 'resetConf' && <PasswordResetConfirmModal setScreen={setScreen} onClose={closeLoginModal} />}
        </>
    );
};

export default LoginJourney;