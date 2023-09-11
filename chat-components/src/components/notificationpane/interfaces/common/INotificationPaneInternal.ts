import { IStyle } from "@fluentui/react";
import { ICommandButtonControlProps } from "../../../common/interfaces/ICommandButtonControlProps";
import { IImageControlProps } from "../../../common/interfaces/IImageControlProps";
import { INotificationPaneComponentOverrides } from "./INotificationPaneComponentOverrides";

/**
 * This interface will act as generic object that will have the common properties and also the properties for each scenario.
 * Stateful will populate this interface based on the scenario type and send it to NotificationBanner view.
 */
export interface INotificationPaneInternal {
    // Define common control/style/class names properties.

    // General
    id?: string;
    dir?: "ltr" | "rtl" | "auto";
    generalStyleProps?: IStyle;
    containerClassName?: string;
    componentOverrides?: INotificationPaneComponentOverrides;

    // Title
    hideTitle?: boolean;
    titleText?: string;
    titleStyleProps?: IStyle;
    titleClassName?: string;

    // Sub Title
    hideSubtitle?: boolean;
    subtitleText?: string;
    subtitleStyleProps?: IStyle;
    subtitleClassName?: string;

    // Hyper link
    hideHyperlink?: boolean;
    hyperlinkText?: string;
    hyperlinkAriaLabel?: string;
    hyperlinkHref?: string;
    hyperlinkStyleProps?: IStyle;
    hyperlinkHoverStyleProps?: IStyle;
    hyperlinkClassName?: string;

    // Notification Icon
    hideNotificationIcon?: boolean;
    notificationIconProps?: IImageControlProps;
    notificationIconStyleProps?: IStyle;
    notificationIconClassName?: string;

    // Dismiss button "X"
    hideDismissButton?: boolean;
    dismissButtonProps?: ICommandButtonControlProps;
    dismissButtonStyleProps?: IStyle;
    dismissButtonHoverStyleProps?: IStyle;
    dismissButtonClassName?: string;

    // Define properties for - Chat disconnect scenario.
    hideCloseChatButton?: boolean;
    // closeChatButtonProps?: IButtonCommonProps
    closeChatButtonProps?: ICommandButtonControlProps;
    closeChatButtonStyleProps?: IStyle;
    closeChatButtonHoverStyleProps?: IStyle;
    closeChatButtonClassName?: string;

    infoGroupStyleProps?: IStyle;
    buttonGroupStyleProps?: IStyle;

    // Define properties for - Start Chat scenario.
    // .....Continue adding properties for other notification scenarios
}