import { ButtonTypes, IconNames, Ids } from "@microsoft/omnichannel-chat-components/lib/types/common/Constants";
import { INotificationPaneControlProps } from "@microsoft/omnichannel-chat-components/lib/types/components/notificationpane/interfaces/common/INotificationPaneControlProps";
// import { INotificationPaneControlProps } from "../interfaces/common/INotificationPaneControlProps";

export const defaultNotificationPaneControlProps: INotificationPaneControlProps = {
    id: Ids.DefaultNotificationPaneId,
    dir: "auto",
    hideNotificationPane: false,
    hideTitle: false,
    // titleText: Texts.NotificationPaneChatDisconnectTitleText,
    hideSubtitle: false,
    // subtitleText: Texts.NotificationPaneChatDisconnectSubtitleText,
    hideDismissButton: false,
    dismissButtonProps: {
        id: Ids.CloseButtonId,
        type: ButtonTypes.Icon,
        iconName: IconNames.ChromeClose,
        hideButtonTitle: true
    },
    hideHyperlink: true,
    hyperlinkText: "Learn more",
    hyperlinkAriaLabel: "hyperlink aria label",
    hideIcon: false,
    // notificationIconProps: {
    //     id: Ids.HeaderIconId,
    //     src: ModernChatIconBase64,
    //     alt: Texts.HeaderIcon
    // }
};