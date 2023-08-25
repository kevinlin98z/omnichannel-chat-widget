import { IStyle } from "@fluentui/react";

/**
 * This interface will have the common styles properties and is inherited by each scenarios.
 */
export interface INotificationStyleProps {
    generalStyleProps?: IStyle;
    titleStyleProps?: IStyle;
    subtitleStyleProps?: IStyle;
    dismissButtonStyleProps?: IStyle;
    dismissButtonHoveredStyleProps?: IStyle;
    hyperlinkStyleProps?: IStyle;
    hyperlinkHoveredStyleProps?: IStyle;
    notificationIconStyleProps?: IStyle;
}