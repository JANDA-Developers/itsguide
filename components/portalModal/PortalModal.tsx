import React from "react";
import ReactDOM from "react-dom";

interface IWindowOpenString {
    width: number;
    height: number;
    left: number;
    top: number;
}

interface IProps {
    closeWindowPortal: () => void;
    openParam: Partial<IWindowOpenString>;
}

export class MyWindowPortal extends React.PureComponent<IProps> {
    public externalWindow: Window | null;
    public containerEl: HTMLDivElement;
    public openStr: string;

    constructor(props: IProps) {
        super(props);
        this.containerEl = document.createElement("div"); // STEP 1: create an empty div
        this.externalWindow = null;

        let openStrings = [];
        for (const [key, value] of Object.entries(props.openParam)) {
            if (value) {
                const param = key + "=" + value;
                openStrings.push(param);
            }
        }

        this.openStr = openStrings.join(",");
    }

    componentDidMount() {
        // STEP 3: open a new browser window and store a reference to it
        this.externalWindow = window.open("", "", this.openStr);

        // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
        this.externalWindow!.document.body.appendChild(this.containerEl);

        this.externalWindow!.document.title = "A React portal window";

        // update the state in the parent component if the user closes the
        // new window
        this.externalWindow!.addEventListener("beforeunload", () => {
            this.props.closeWindowPortal();
        });
    }

    componentWillUnmount() {
        // This will fire when this.state.showWindowPortal in the parent component becomes false
        // So we tidy up by just closing the window
        this.externalWindow!.close();
    }

    render() {
        // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
        return ReactDOM.createPortal(this.props.children, this.containerEl);
    }
}
