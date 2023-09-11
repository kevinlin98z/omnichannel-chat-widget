import { ICommandButtonControlProps } from "../../../common/interfaces/ICommandButtonControlProps";
import { INotificationPaneControlProps } from "../common/INotificationPaneControlProps";

/**
 * This interface will have all the properties as customized by C1 for chat disconnect scenario
 * It extends the common properties <INotificationPaneControlProps>
 */
export interface IChatDisconnectControlProps extends INotificationPaneControlProps {
    // Add properties specific to Chat disconnect scenario
    hideCloseChatButton?: boolean;
    // closeChatButtonText?: string;
    // closeChatButtonAriaLabel?: string;
    closeChatButtonProps?: ICommandButtonControlProps;
}