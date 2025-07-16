import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/router'
import AuthProvider from './Contexts/AuthContext/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </QueryClientProvider>

    </div>
  </StrictMode>,
)
