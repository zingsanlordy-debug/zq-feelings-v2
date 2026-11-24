import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white p-6 font-poppins text-slate-800">
          <div className="max-w-md w-full bg-[#fff8f9] border-2 border-[#ffe4e8] rounded-3xl p-8 text-center shadow-lg space-y-4">
            <div className="text-4xl">🌸</div>
            <h2 className="font-rozha text-2xl font-bold text-[#d94f70]">
              ZQ Feelings - Dil Ki Awaaz
            </h2>
            <p className="text-slate-600 text-[15px]">
              Something unexpected occurred, but your content is safe. Please click below to refresh and continue.
            </p>
            <button
              type="button"
              onClick={() => {
                try {
                  window.location.reload();
                } catch {
                  this.setState({ hasError: false });
                }
              }}
              className="mt-3 px-6 py-3 rounded-2xl bg-[#d94f70] text-white font-bold text-[16px] hover:bg-[#b32f4f] transition-colors cursor-pointer shadow-md"
            >
              Refresh Page / Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
