import React from 'react'

const Developers = () => {
  return (
    <div className='container mx-auto p-5'>
        <h1>Developers</h1>
        <div className='p-5 m-5 grid grid-cols-6 gap-2'>            
                <div className="flex flex-wrap justify-center">
                    <div className="w-64 sm:w-64 px-4">
                        <img src="https://avatars.githubusercontent.com/u/111821992?s=400&u=3d6aaac148b8d93138e2aefca2efbc7712d6f232&v=4" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                    <h3 className='font-bold mr-1'>Riza Niel Ibanez, </h3>
                    <p className='font-thin italic'>Developer</p>
                </div>  
                {/* grid item */}
                <div className="flex flex-wrap justify-center">
                    <div className="w-64 sm:w-64 px-4">
                        <img src="https://avatars.githubusercontent.com/u/74034797?s=400&u=8d250db9bceb4f7415526ea5b276c203f10e3fa9&v=4" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                    <h3 className='font-bold mr-1'>John Ray Paulin, </h3>
                    <p className='font-thin italic'> Lead Developer</p>
                </div>           
                {/* grid item */}  

                

        </div>
    </div>
  )
}

export default Developers
