import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(_error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-peach dark:bg-[#071A14] text-center px-6">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-6 text-3xl">!</div>
                    <h1 className="text-4xl font-serif font-bold text-navy dark:text-gold-light mb-4">
                        Something went wrong.
                    </h1>
                    <p className="text-dark/60 dark:text-peach/70 mb-8 max-w-md text-lg leading-relaxed">
                        We apologize for the inconvenience. Please try refreshing the page.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn-gold py-4 px-8 text-base"
                    >
                        Refresh Page
                    </button>

                    {import.meta.env.DEV && this.state.error && (
                        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl text-left overflow-auto max-w-2xl max-h-64">
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
