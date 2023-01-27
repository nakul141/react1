// import React from "react";
import React, { useState } from "react";
import Test from  "./Test";
import UserDetails from "./userDetails";


    // allusers = [    
let allUsers = [
  { name: "Nakul", email: "Nakul@email.com",phoneNumber: "+91-648923532"},
  { name: "Amit", email: "amit212@email.com", phoneNumber: "+91-238499272"},
  { name: "Abhsihek", email: "abhishek@email.com", phoneNumber: "+91-957257194"},
];

const AllUserList = () => {

    const [state, setState] = useState({
        name: "Nakul Dwivedi",
    });
    

// class AllUserList extends React.Component {
   

    // let array = [
    //     <UserDetails user ={allUsers[0]} />,
    //     <UserDetails user ={allUsers[1]} />,
    //     <UserDetails user ={allUsers[2]} />,
    // ];

    // let array = allUsers.map((user,index) => (
    //     <UserDetails user={user} key={index} />
    // ));

    // return <div>{array}</div>;

    // render() {
    //     setTimeout(() => {
    //         this.setState({ name: "Ujjwal kr Bhardawj"});
    //     }, 15000);
    // }

    return (
        <div>
            <Test name = {state.name} />
            {allUsers.map((user, index) => (
                // {/* {this.allusers.map((user, index) => ( */}
                <UserDetails
                key={index}
                user={user} 
                />
            ))}
        </div>
    );
 };
            export default AllUserList;

    // return (
    //     <div>
    //         <UserDetails user ={allUsers[0]} />
    //         <UserDetails user ={allUsers[1]} />
    //         <UserDetails user ={allUsers[2]} />
    //     </div>
    // );
// };

// import React, { useState } from "react";
// import UserDetails from "./userDetails";

// const AllUserList = () => {
//     // let xyz = useState(); // xyz is an array which contains 2 things, xyz[0], is state and xyz(1) is setter function
//     const [state, setState] = useState({ name: "Nakul Dwivedi"});

//     return <h1>The name is {state.name}</h1>;
// };

// export default AllUserList;