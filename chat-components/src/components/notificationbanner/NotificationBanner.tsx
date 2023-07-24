import { IIconStyles, ILabelStyles, ISpinnerStyles, IStackStyles, Icon, Label, Spinner, Stack } from "@fluentui/react";

import React from "react";

function NotificationBanner() {

    return (
        <>
            <Stack
                id={"nb-container-id"}
                tabIndex={-1}
                // styles={containerStyles}
                role={"presentation"}
                dir={"ltr"}>
                <Label
                    className={"nb-title"}
                    // styles={defaultNotificationTitleStyles}
                    tabIndex={-1}
                    id={"nb-title-id"}>
                    {"Sample notification title"}
                </Label>
            </Stack>
        </>
    );
}

export default NotificationBanner;