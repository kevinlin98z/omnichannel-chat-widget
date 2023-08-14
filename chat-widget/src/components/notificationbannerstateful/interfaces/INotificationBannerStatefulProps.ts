// import { INotificationBannerProps } from "@microsoft/omnichannel-chat-components/lib/types/components/notificationbanner/interfaces/INotificationBannerProps";
import { INotificationPaneProps } from "@microsoft/omnichannel-chat-components/lib/types/components/notificationpane/interfaces/INotificationPaneProps";

export interface INotificationBannerStatefulProps extends INotificationPaneProps {
    notificationBannerProps?: INotificationPaneProps;
    notificationScenarioType?: string;
}