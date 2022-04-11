import { globalSettings } from '../global-settings';

/**
 * Checks settings for vertical and adds in global settings if present
 * @param {object} verticalAdminSettings admin settings for the vertical that will be checked against globalSettings
 */
export function consolidateAdminSettings(verticalAdminSettings) {
    if (!verticalAdminSettings.sk_widget && globalSettings.admin?.sk_widget) {
        verticalAdminSettings.sk_widget = globalSettings.admin?.sk_widget;
    }
    
    if (!verticalAdminSettings.sk_buttons && globalSettings.admin?.sk_buttons) {
        verticalAdminSettings.sk_buttons = globalSettings.admin?.sk_buttons;
    }
}