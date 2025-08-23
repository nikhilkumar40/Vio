import React from 'react'

function LoginButton({
  children,
  classname = '',

}) {
  return (
    <div>
      <button className={`${classname} text-shadow-amber-50 font-medium rounded-l`}>{children}</button>
    </div>
  )
}

export default LoginButton