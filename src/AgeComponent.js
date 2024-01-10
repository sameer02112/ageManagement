import React from 'react'
import './ageStyles.css'
import Card from './Card';

function AgeComponent() {

    const [user, setUser] = React.useState({
        'name': '',
        'age': '',
        'phone': '',
        'email': ''
    });

    const [userArr, setUserArr] = React.useState([]);

    const handleName = (e) => {
        console.log(e.target.value);
        let obj = Object.assign({},user);
        obj['name'] = e.target.value
        setUser(obj)
    }

    const handleAge = (e) => {
        console.log(e.target.value);
        let obj = Object.assign({},user);
        obj['age'] =Number(e.target.value)
        setUser(obj)
    }

    const handleEmail = (e) => {
        console.log(e.target.value);
        let obj = Object.assign({},user);
        obj['email'] = e.target.value
        setUser(obj)
    }

    const handlePhone = (e) => {
        console.log(e.target.value);
        let obj = Object.assign({},user);
        obj['phone'] = e.target.value
        setUser(obj)
    }


    const handleAddUser = () => {
        let arr = Object.assign([],userArr);
        console.log('user', user);
        console.log('arr',arr)
        arr.push(user);
        setUserArr(arr);
    }

    const handleCancelUser = () => {

    }

  return (
    <>
    <div className='header'>
        <h1>Age</h1>
        <button>Add +</button>

    </div>
    {console.log('userArr',userArr)}
    <div className='parentContainer'>
        <div className='child1'>
            <h1>Age 1-18</h1>
            {userArr.map(ele => {
                console.log(ele)
                if(ele.age < 18){
                    console.log('inside if')
                    return(
                        <Card user = {ele}/>
                    )
                }
            })}
        </div>
        <div className='child2'>
            <h1>Age 19-25</h1>
            {userArr.map(ele => {
                if(ele.age <= 25 && ele.age > 19){
                    return(
                        <Card user = {ele}/>
                    )
                }
            })}
        </div>
        <div className='child3'>
             <h1>Age 25-45</h1>
             {userArr.map(ele => {
                if(ele.age <= 45 && ele.age > 25){
                    return(
                        <Card user = {ele}/>
                    )
                }
            })}
        </div>
        <div className='child3'>
             <h1>Age 45+</h1>
             {userArr.map(ele => {
                if(ele.age > 45){
                    return(
                        <Card user = {ele}/>
                    )
                }
            })}
        </div>
    </div>

    <div className='form-container'>
        <p>Name</p>
        <input type='text' placeholder='enter name' onChange={handleName}></input>

        <p>Age</p>
        <input type='text' placeholder='enter age' onChange={handleAge}></input>

        <p>Phone</p>
        <input type='text' placeholder='enter phone' onChange={handlePhone}></input>

        <p>Email</p>
        <input type='text' placeholder='enter email' onChange={handleEmail}></input>

        <button className='addButton' onClick ={handleAddUser}>Add</button>
        <button className='addButton' onClick ={handleCancelUser}> Cancel</button>
    </div>


    </>
  )
}

export default AgeComponent