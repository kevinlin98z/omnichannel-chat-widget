import { INotificationStyleProps } from "../common/INotificationStyleProps";
import { IChatDisconnectNotificationProps } from "./chatdisconnect/IChatDisconnectNotificationProps";

export interface INotificationBannerProps { // TODO where will INotificationControl/StyleProps be shown?
    notificationBannerStyleProps?: INotificationStyleProps;
    chatDisconnectNotificationProps?: IChatDisconnectNotificationProps;
    // downloadTranscriptErrorNotificationProps?: IDownloadTranscriptErrorNotificationProps;
    notificationScenarioType?: string;
    onDismiss?: () => void;
}