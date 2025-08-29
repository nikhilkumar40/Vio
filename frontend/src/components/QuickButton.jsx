import React from 'react'

function QuickButton({
  children,
  classname = ''
}) {
  return (
    <button
      className={`${classname} border-2 rounded-2xl border-dotted
    text-gray-400 border-gray-500 px-5 py-1`}>
      {children}
    </button>
  )
}

export default QuickButton