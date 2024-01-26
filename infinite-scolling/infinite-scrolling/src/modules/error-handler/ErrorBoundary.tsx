import React from "react";
import ErrorComponent from "./ErrorComponent";

interface IProps {
    children: React.ReactNode
}

export class ErrorBoundary extends React.Component<IProps, { hasError: boolean }> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>
                Something went wrong.
                <ErrorComponent />
            </h1>;
        }

        return this.props.children;
    }
}