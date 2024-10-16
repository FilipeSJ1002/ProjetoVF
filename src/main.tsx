import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <AuthProvider>
      <BrowserRouter>
        <StrictMode>
          <App/>
        </StrictMode>
      </BrowserRouter>
    </AuthProvider>
  </ChakraProvider>
)
