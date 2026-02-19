import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(_error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
                    <h1 className="text-4xl font-serif font-bold text-primary mb-4">Something went wrong.</h1>
                    <p className="text-gray-600 mb-8 max-w-md">
                        We apologize for the inconvenience. Please try refreshing the page or try again later.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn btn-primary"
                    >
                        Refresh Page
                    </button>

                    {import.meta.env.DEV && this.state.error && (
                        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded text-left overflow-auto max-w-2xl max-h-64">
                            <p className="text-red-600 font-mono text-sm">{this.state.error.toString()}</p>
                            <pre className="text-xs text-red-500 mt-2">{this.state.errorInfo?.componentStack}</pre>
                        </div>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
