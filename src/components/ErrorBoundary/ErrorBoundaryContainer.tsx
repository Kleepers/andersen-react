import React, {ErrorInfo, ReactNode} from "react";
import ErrorBoundary from "./ErrorBoundary";


interface Props {
    children?: ReactNode,
}

interface State {
    hasError: boolean,
}

export class ErrorBoundaryContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true,
        });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorBoundary />
            );
        }

        return this.props.children;
    }
}
