import { IChatDisconnectNotificationControlProps } from "./IChatDisconnectNotificationControlProps";
import { IChatDisconnectNotificationStyleProps } from "./IChatDisconnectStyleProps";

export interface IChatDisconnectNotificationProps {
    // componentOverrides?: INotificationComponentOverrides; // TODO is this type correct?
    controlProps?: IChatDisconnectNotificationControlProps;
    styleProps?: IChatDisconnectNotificationStyleProps;
}