import React from 'react'

function List({newUser}) {
  return (
    <div>
        <div>{newUser.title} {newUser.age}</div>
    </div>
  )
}

export default List