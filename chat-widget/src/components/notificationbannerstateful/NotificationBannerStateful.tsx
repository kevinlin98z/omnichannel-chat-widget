// import { LogLevel, TelemetryEvent } from "../../common/telemetry/TelemetryConstants";
// import React, { Dispatch, useEffect } from "react";
import React from "react";

// import { ILiveChatWidgetAction } from "../../contexts/common/ILiveChatWidgetAction";
// import { ILiveChatWidgetContext } from "../../contexts/common/ILiveChatWidgetContext";
// import { ILoadingPaneControlProps } from "@microsoft/omnichannel-chat-components/lib/types/components/loadingpane/interfaces/ILoadingPaneControlProps";
// import { ILoadingPaneStyleProps } from "@microsoft/omnichannel-chat-components/lib/types/components/loadingpane/interfaces/ILoadingPaneStyleProps";
// import { IStyle } from "@fluentui/react";
import { NotificationBanner } from "@microsoft/omnichannel-chat-components";
// import NotificationBanner from "../../../../chat-components/src/components/notificationbanner/NotificationBanner";
// import { TelemetryHelper } from "../../common/telemetry/TelemetryHelper";
// import { defaultGeneralLoadingPaneStyleProps } from "./common/defaultStyleProps/defaultgeneralLoadingPaneStyleProps";
// import { errorUILoadingPaneStyleProps } from "./common/errorUIStyleProps/errorUILoadingPaneStyleProps";
// import { findAllFocusableElement } from "../../common/utils";
// import useChatContextStore from "../../hooks/useChatContextStore";
// import useWindowDimensions from "../../hooks/useWindowDimensions";

import { hooks } from "botframework-webchat";
import { useCallback } from "react";
import { INotificationBannerStatefulProps } from "./interfaces/INotificationBannerStatefulProps";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NotificationBannerStateful = (props: INotificationBannerStatefulProps) => {
    // const { notificationType } = props;
    console.log("ADAD notificationBannerProps before", props.notificationBannerProps);
    console.log("ADAD notificationType", props.notificationScenarioType);

    const {useDismissNotification} = hooks;
    const dismissNotification = useDismissNotification();
    const handleDismissNotification = useCallback(() => dismissNotification(props.notificationScenarioType ?? ""), []); 

    const notificationBannerProps = {
        ...props.notificationBannerProps,
        onDismiss: handleDismissNotification,
    };

    // const controlProps: INotificationControlProps = {
    //     dismissButtonProps: {
    //         onClick: handleDismissNotification
    //     }
    //     ...props?.controlProps
    // };

    // notificationBannerProps.chatDisconnectNotificationProps?.controlProps?.dismissButtonProps?.onClick = handleDismissNotification;

    console.log("ADAD notificationBannerProps after", notificationBannerProps);

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

    return (
        <NotificationBanner
            // notificationProps={props.notificationBannerProps?.chatDisconnectNotificationProps}
            chatDisconnectNotificationProps={props.notificationBannerProps?.chatDisconnectNotificationProps}
            // downloadTranscriptNotificationProps={}
            // messageToLongNotificationProps={}
            notificationScenarioType={props.notificationScenarioType}
            onDismiss={handleDismissNotification}
            // notificationBannerProps={notificationBannerProps}
            // onCloseClick={handleDismissNotification}
            // componentOverrides={loadingPaneProps?.componentOverrides}
            // controlProps={state.appStates.startChatFailed ? errorUIControlProps : loadingPaneControlProps}
            // styleProps={state.appStates.startChatFailed ? errorUIStyleProps : loadingPaneStyleProps}
            // windowWidth={width}
            // windowHeight={height}
        />
    );
};

export default NotificationBannerStateful;