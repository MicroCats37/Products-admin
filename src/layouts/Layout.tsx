import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <header className='bg-green-700 rounded-lg my-8 w-5/6 md:3/4 lg:w-2/4 mx-auto '>
            <div className='mx-auto max-w-6xl py-10 text-center'>
                <h1 className='text-4xl font-extrabold text-purple-900'>
                Administrador de productos
                </h1>
            </div>
        </header>
    
        <main className='mt-10 mx-auto w-5/6 md:3/4 lg:w-2/4 p-10 bg-slate-300 shadow-md rounded-lg shadow-lime-800 scroll-mx-0 overflow-hidden'>
            <Outlet/>
        </main>
    </>
  )
}
