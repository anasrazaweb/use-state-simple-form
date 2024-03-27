import React, { useState } from 'react'

const Form = () => {
    const [username, setusername] = useState("")
    const [userPassword, setuserPassword] = useState("")
    const [login, setlogin] = useState(false)
    const [Error, setError] = useState("")
    const handlelogin = () => {

        console.log(username.userPassword)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("")
        try {
            if (username === "Anas Raza" && userPassword === "123321") {
                setlogin(true)

            } else {
                if (username.length === 0) {
                    setError("Please fill the username field");
                } else {
                    throw Error;
                }
            }
        } catch (error) {
            setusername("")
            setError("incorrect username and password")
        }
        setuserPassword("")
    }
    return (
        <div>
            <div
                className="w-full max-w-xs">
                {
                    login ? (
                        <div className=' flex justify-center items-center flex-col gap-5'>
                            <h1 className=' text-3xl font-semibold'>Wellcome {username}!</h1>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setlogin(false)}
                            >
                                Log out
                            </button>

                        </div>

                    ) : (

                        <div >
                            <p className='text-center mb-10'>username = <span>Anas Raza</span>  <br /> password = <span>123321</span></p>
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white md:shadow-xl border-zinc-300 border-[1px] rounded px-8 pt-6 pb-8 mb-4">
                                <div
                                    className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        for="username">
                                        Username
                                    </label>
                                    <input
                                        className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                        id="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setusername(e.target.value)}

                                        placeholder="Username" />
                                </div>
                                <div
                                    className="mb-6">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        for="password">
                                        Password
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        value={userPassword}
                                        onChange={(e) => setuserPassword(e.target.value)}
                                        type="password"
                                        placeholder="******************" />
                                    {/* <p 
                        className="text-red-500 text-xs italic">Please choose a password.</p> */}
                                </div>
                                <div
                                    className="flex items-center justify-center w-full">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={handlelogin}
                                        type="submit">
                                        Log In
                                    </button>

                                </div>
                            </form>
                        </div>
                    )}
                <p
                    className="text-center text-red-500 text-sm">
                    {Error}
                </p>
            </div>
        </div >
    )
}

export default Form