import React from 'react'
import classes from './List.module.css'
import Card from './Card'

function List({newUser}) {
  return (
    <Card className={classes.users}>
        <ul>
            <li>
                {newUser.title} {newUser.age}
            </li>
        </ul>
    </Card>
  )
}

export default List