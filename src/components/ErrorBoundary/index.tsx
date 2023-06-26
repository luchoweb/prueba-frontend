import { Component, ReactNode } from "react";
import ErrorView from "./ErrorView";

export interface State {
  hasError: boolean;
  error?: Error | null;
}

interface Props {
  children?: ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorView error={this.state?.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
