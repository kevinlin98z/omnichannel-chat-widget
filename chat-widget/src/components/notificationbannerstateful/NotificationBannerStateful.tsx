// import { LogLevel, TelemetryEvent } from "../../common/telemetry/TelemetryConstants";
// import React, { Dispatch, useEffect } from "react";
import React from "react";

// import { ILiveChatWidgetAction } from "../../contexts/common/ILiveChatWidgetAction";
// import { ILiveChatWidgetContext } from "../../contexts/common/ILiveChatWidgetContext";
// import { ILoadingPaneControlProps } from "@microsoft/omnichannel-chat-components/lib/types/components/loadingpane/interfaces/ILoadingPaneControlProps";
// import { ILoadingPaneStyleProps } from "@microsoft/omnichannel-chat-components/lib/types/components/loadingpane/interfaces/ILoadingPaneStyleProps";
// import { IStyle } from "@fluentui/react";

import { NotificationPane } from "@microsoft/omnichannel-chat-components";
// import { NotificationBanner } from "@microsoft/omnichannel-chat-components";

import { hooks } from "botframework-webchat";
import { useCallback } from "react";
import { INotificationBannerStatefulProps } from "./interfaces/INotificationBannerStatefulProps";
import { INotificationPaneInternal } from "@microsoft/omnichannel-chat-components/lib/types/components/notificationpane/interfaces/common/INotificationPaneInternal";
import { NotificationScenarios } from "../webchatcontainerstateful/webchatcontroller/enums/NotificationScenarios";
// import { INotificationPaneProps } from "@microsoft/omnichannel-chat-components/lib/types/components/notificationpane/interfaces/INotificationPaneProps";
// import { INotificationPaneInternal } from "@microsoft/omnichannel-chat-components/lib/types/components/notificationbanner/interfaces/common/INotificationPaneInternal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NotificationBannerStateful = (props: INotificationBannerStatefulProps) => {
    console.log("ADAD notificationBannerProps", props.notificationBannerProps);
    console.log("ADAD notificationType", props.notificationScenarioType);

    const {useDismissNotification} = hooks;
    const dismissNotification = useDismissNotification();
    const handleDismissNotification = useCallback(() => dismissNotification(props.notificationScenarioType ?? ""), []); 

    let genericPropsObj: INotificationPaneInternal = {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const populateInternalProps = (notificationProps: any) => {
        // populate INotificationPaneInternal after merging in customized props with default props (using mergeProps)
        console.log("ADAD populating internal props using: ", notificationProps);
        genericPropsObj = {
            titleText: notificationProps.controlProps?.titleText,
            titleStyleProps: notificationProps.styleProps?.titleStyleProps,
            dismissButtonProps: {
                text: "Dismiss",
                onClick: handleDismissNotification,
            },
            showStartChatButton: notificationProps.showStartChatButton, // in the case a scenario does not have showStartChatButton, this value will be null and not rendered
        };
    };

    switch (props.notificationScenarioType) {
        case NotificationScenarios.ChatDisconnect:
            populateInternalProps(props.notificationBannerProps?.chatDisconnectNotificationProps); // merging of default chatDisconnectNotification props to be passed in as a parameter and done within this method
            break;
        // case NotificationScenarios.AttachmentError:
        //     populateInternalProps(props.notificationBannerProps?.attachmentErrorNotificationProps);
        // additional scenario type cases to be added...
        default:
            populateInternalProps(props.notificationBannerProps?.chatDisconnectNotificationProps);
    }

    // const genericPropsObj: INotificationPaneInternal = {
    //     titleText: props.notificationBannerProps?.chatDisconnectNotificationProps?.controlProps?.titleText,
    //     titleStyleProps: props.notificationBannerProps?.chatDisconnectNotificationProps?.styleProps?.titleStyleProps,
    //     dismissButtonProps: {
    //         text: "Dismiss",
    //         onClick: handleDismissNotification,
    //     }
    // };

    console.log("ADAD genericPropsObj", genericPropsObj);

    // const controlProps: INotificationControlProps = {
    //     dismissButtonProps: {
    //         onClick: handleDismissNotification
    //     }
    //     ...props?.controlProps
    // };

    return (
        <NotificationPane
            {...genericPropsObj}
            // // notificationProps={props.notificationBannerProps?.chatDisconnectNotificationProps}
            // chatDisconnectNotificationProps={props.notificationBannerProps?.chatDisconnectNotificationProps}
            // // downloadTranscriptNotificationProps={}
            // // messageToLongNotificationProps={}
            // notificationScenarioType={props.notificationScenarioType}
            // onDismiss={handleDismissNotification}
            // // notificationBannerProps={notificationBannerProps}
        />
    );
};

export default NotificationBannerStateful;

// const notificationBannerProps = {
//     ...props.notificationBannerProps,
//     onDismiss: handleDismissNotification,
// };


// notificationBannerProps.chatDisconnectNotificationProps?.controlProps?.dismissButtonProps?.onClick = handleDismissNotification;

// console.log("ADAD notificationBannerProps after", notificationBannerProps);

// // each NotificationBanner takes a type of notification
// const list = [1, 2, 3]; // list of notification types
// // dismissing a notification will remove the notification from the list, and re-render everything
// // the notification ID in webchat is actually a string
// const RenderComps = () => {
//     return <>{
//         // need div here if we want to do overlay
//         <div>{
//             list.map((num) => <NotificationBanner key={num} />)
//         }</div>
//     }</>;
// };

// banner needs a hook to dismiss (remove from list the exact id of the notification banner)

// return RenderComps();

// TODO: pass all default behaviors within the stateful!!!
// close button == "x" button for a notification