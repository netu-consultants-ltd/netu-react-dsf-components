import React, { FC } from "react";
import "../../resources/css/dsf.main.min.css";

export interface DSFPanelProps {
    /** Panel title text */
    title: string;
    /** Panel body text */
    children?: React.ReactNode;
}

const DSFPanel: FC<DSFPanelProps> = ({ title, children, ...props }: DSFPanelProps) => {
    return (
        <>
            <div className="row govcy-px-2" {...props}>
                <div className="govcy-alert-completed-notification govcy-px-0">
                    <div className="govcy-alert-completed-notification-body govcy-bg-success">
                        <h1>{title}</h1>
                        {children && <p className="govcy-mb-0">{children}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

DSFPanel.defaultProps = {
    children: undefined,
};

DSFPanel.displayName = "Panel";

export default DSFPanel;
