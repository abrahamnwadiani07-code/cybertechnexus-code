import { Component, ReactNode } from 'react';
import { ShieldAlert, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <ShieldAlert size={48} className="text-ctn-red/60 mx-auto mb-4" />
            <h2 className="font-poppins text-xl font-bold text-ctn-text-bright mb-3">Something Went Wrong</h2>
            <p className="text-ctn-text-dim text-sm mb-6">An unexpected error occurred. Our team has been notified.</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ctn-blue text-white rounded-lg text-sm font-medium cursor-pointer border-none hover:bg-ctn-blue/90 transition-colors"
            >
              <RotateCcw size={14} /> Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
