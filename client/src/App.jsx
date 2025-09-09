import UserNavbar from './components/UserNavbar'
import SignUpLogIn from './components/SignUpLogIn'

function App() {

  return (
    <>
      <div className='w-full min-h-[100dvh] flex flex-col overflow-hidden'>
        <UserNavbar/>
        <SignUpLogIn/>
      </div>
    </>
  )
}

export default App
