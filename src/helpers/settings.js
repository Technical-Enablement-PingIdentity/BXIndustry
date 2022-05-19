import { globalSettings } from '../global-settings';

/**
 * Checks settings for vertical and adds in global settings if present
 * @param {object} verticalAdminSettings admin settings for the vertical that will be checked against globalSettings
 */
export function consolidateAdminSettings(verticalAdminSettings) {
    if (!verticalAdminSettings.dv_widget && globalSettings.admin?.dv_widget) {
        verticalAdminSettings.dv_widget = globalSettings.admin?.dv_widget;
    }
    
    if (!verticalAdminSettings.dv_buttons && globalSettings.admin?.dv_buttons) {
        verticalAdminSettings.dv_buttons = globalSettings.admin?.dv_buttons;
    }
}