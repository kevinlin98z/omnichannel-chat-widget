import { INotificationBannerProps } from "@microsoft/omnichannel-chat-components/lib/types/components/notificationbanner/interfaces/INotificationBannerProps";

export interface INotificationBannerStatefulProps extends INotificationBannerProps {
    notificationBannerProps?: INotificationBannerProps;
    notificationScenarioType?: string;
}