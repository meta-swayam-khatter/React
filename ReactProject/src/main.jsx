import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { DataProvider } from './context/FormContext'
// import store from './redux/store'
// import { Provider } from 'react-redux'
import ErrorBoundary from './ErrorBoundry'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary>
      <DataProvider>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
      </DataProvider>
    </ErrorBoundary>
  </BrowserRouter>
)