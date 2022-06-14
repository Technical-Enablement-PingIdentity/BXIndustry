export const globalSettings = {
    dv_buttons: [
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
    dashboard: {
        // dv_widget: {
        //     policy_key: process.env.REACT_APP_DASHBOARD_POLICY_KEY,
        //     company_key: process.env.REACT_APP_COMPANY_KEY,
        //     api_key: process.env.REACT_APP_API_KEY
        // },
        // dv_buttons: [
        //     {
        //         "text": "Test Action",
        //         "policy_key": process.env.REACT_APP_REGISTRATION_POLICY_KEY,
        //         "company_key": process.env.REACT_APP_COMPANY_KEY,
        //         "api_key": process.env.REACT_APP_API_KEY
        //     }
        // ]
    }
};