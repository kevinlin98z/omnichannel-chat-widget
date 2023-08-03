import { INotificationStyleProps } from "../../common/INotificationStyleProps";
import { IStyle } from "@fluentui/react";

export interface IChatDisconnectNotificationStyleProps extends INotificationStyleProps {
    startChatStyleProps?: IStyle;
    startChatHoveredStyleProps?: IStyle;
    closeChatButtonStyleProps?: IStyle;
    closeChatButtonHoveredStyleProps?: IStyle;
    downloadTranscriptButtonStyleProps?: IStyle;
    downloadTranscriptButtonHoveredStyleProps?: IStyle;
}