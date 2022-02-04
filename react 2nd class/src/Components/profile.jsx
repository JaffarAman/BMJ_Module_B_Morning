import React from "react";

const Profile = ({ name, age, city, helloFunction }) => {
    // const {name , age ,city} = props
    const fullName = "jawan pakistan"
    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>AGE</th>
                        <th>City</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{city}</td>
                    </tr>

                </tbody>
            </table>

            <button onClick={() => helloFunction(fullName)}>CHILD BUTTON</button>
        </>


    )
}
export default Profile