import { Component, ErrorInfo, ReactNode } from "react";
import ErrorView from "./ErrorView";

export interface State {
  hasError: boolean;
  error?: Error | null;
}

interface Props {
  children?: ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error });
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorView error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;