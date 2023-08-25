import { INotificationComponentOverrides } from "../common/INotificationComponentOverrides";
import { IChatDisconnectStyleProps } from "./IChatDisconnectStyleProps";
import { IChatDisconnectControlProps } from "./IChatDisconnectControlProps";

/**
 * This interface will have all required control/style/overrides props for chat disconnect scenario
 */
export interface IChatDisconnectNotificationProps {
    componentOverrides?: INotificationComponentOverrides; // TODO is this type correct?
    controlProps?: IChatDisconnectControlProps;
    styleProps?: IChatDisconnectStyleProps;
}