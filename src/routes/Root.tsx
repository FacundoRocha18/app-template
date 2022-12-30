import { Outlet } from 'react-router-dom'
import App from 'App'

export const Root = () => {
  return (
    <div className='App'>
      <App />
      <Outlet />
    </div>
  )
}
