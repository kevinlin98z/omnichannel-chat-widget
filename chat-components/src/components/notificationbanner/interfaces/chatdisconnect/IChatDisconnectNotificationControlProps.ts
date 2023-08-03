import { INotificationControlProps } from "../../common/INotificationControlProps";

export interface IChatDisconnectNotificationControlProps extends INotificationControlProps {
    showStartChatButton?: boolean;
    startChatText?: string;
    startChatAriaLabel?: string;
}