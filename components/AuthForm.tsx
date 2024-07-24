import React from 'react'
import { oauth } from '@/lib/action'
const AuthForm = () => {
  return (
    <div>
        <form action={oauth}>
            <button type="submit"
            name="action"
            value="google"
            className='p-2 m-2 bg-slate-400 text-white rounded'
            >
                sign in with Google
            </button>
        </form>
    </div>
  )
}

export default AuthForm