export const globalSettings = {
    sk_buttons: [
        {
            "text": "Log In",
            "policy_key": process.env.REACT_APP_LOGIN_POLICY_KEY,
            "company_key": process.env.REACT_APP_COMPANY_KEY,
            "api_key": process.env.REACT_APP_API_KEY
        },
        {
            "text": "Sign Up",
            "policy_key": process.env.REACT_APP_REGISTRATION_POLICY_KEY,
            "company_key": process.env.REACT_APP_COMPANY_KEY,
            "api_key": process.env.REACT_APP_API_KEY
        }
    ],
    admin: {
        sk_widget: {
            policy_key: process.env.REACT_APP_ADMIN_POLICY_KEY,
            company_key: process.env.REACT_APP_COMPANY_KEY,
            api_key: process.env.REACT_APP_API_KEY
        }
    }
};