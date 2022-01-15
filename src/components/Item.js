import React, { memo, useEffect } from 'react'

const Item = memo(({user, handleDelete}) => {

    useEffect(() => {
        //console.log("item render " + user.name)
    })

    return (
       <li>
            <h1>Nombre: {user.name} Edad: {user.age}</h1>
            <button onClick={() => handleDelete(user.id)}>Eliminar</button>
            
        </li>
    )
})

export default Item
