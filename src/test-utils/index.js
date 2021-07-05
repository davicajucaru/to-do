import React from 'react'
import { render } from '@testing-library/react'
import { TodosProvider } from '../components/TodosContext';

const AllTheProviders = ({ children }) => {
  return (
    <TodosProvider>
      {children}
    </TodosProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }