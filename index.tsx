import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Global error handler for startup crashes (e.g. import errors, process not defined)
window.addEventListener('error', (event) => {
  const root = document.getElementById('root');
  if (root && root.innerHTML === '') {
    root.innerHTML = `
      <div style="padding: 20px; color: red; font-family: monospace; background: #ffe0e0; border: 2px solid red; margin: 20px;">
        <h2 style="margin-top: 0;">起動エラー (Startup Error)</h2>
        <p>アプリケーションの起動に失敗しました。</p>
        <p><b>Error:</b> ${event.message}</p>
        <p>詳細はコンソール(F12)を確認してください。</p>
      </div>
    `;
  }
});

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', fontFamily: "'MS PGothic', monospace", backgroundColor: '#fff0f0', color: '#000', height: '100vh', overflow: 'auto' }}>
          <h1 style={{ color: 'red', borderBottom: '1px solid red', paddingBottom: '10px' }}>
            エラーが発生しました (Error)
          </h1>
          <p>申し訳ありません。予期せぬエラーによりページが表示できません。</p>
          <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Error Details:</h3>
            <pre style={{ whiteSpace: 'pre-wrap', color: '#d00', fontSize: '12px' }}>
              {this.state.error && this.state.error.toString()}
            </pre>
            <details style={{ marginTop: '10px' }}>
              <summary style={{ cursor: 'pointer', color: 'blue' }}>Component Stack</summary>
              <pre style={{ whiteSpace: 'pre-wrap', fontSize: '11px', color: '#666', marginTop: '5px' }}>
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          </div>
          <button 
            onClick={() => window.location.reload()}
            style={{ marginTop: '20px', padding: '5px 10px', cursor: 'pointer' }}
          >
            ページを再読み込み (Reload)
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);