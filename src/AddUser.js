import React,{useState} from 'react'
import Card from './Card'
import classes from './AddUser.module.css'
import classes from './Button.module.css'

function AddUser({addUserProp}, props) {
    const [title, setTitle]= useState('')
    const [age, setAge]= useState('')
    


    const titleHandler = (event)=>{
        setTitle(event.target.value)
    }

    const ageHandler = (event)=>{
        setAge(event.target.value)
    }

    const buttonHandler = (event) => {
        event.preventDefault()
        addUserProp({
           id: (new Date).getTime(),
           title, age
       })
       setTitle('')
       setAge('')
    }
        
    

  return (
      <Card className={classes.input}>
    <form onSubmit={buttonHandler}>

            <label>Name</label>
            <input type='text' value={title} onChange={titleHandler}/>
       
            <label>age</label>
            <input type='number' value={age}  onChange={ageHandler}/>
    
        <button type={props.type || 'button'}
        className={classes.button}
        onClick={props.onClick}

        
        >Add User</button>
        
        
    </form>
    </Card>
  )
}

export default AddUser