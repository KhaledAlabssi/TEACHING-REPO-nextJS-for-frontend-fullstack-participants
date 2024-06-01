import Link from 'next/link';
import React from 'react'
const usersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return response.json()
}

async function UsersList() {

    const users = await usersData();
    return (
        <div>
            {users.map((i: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => 
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                <h2 className="card-title">{i.name}</h2>
                <p>{i.email}</p>
                <div className="card-actions justify-end">
                    <Link href={`/users/${i.id}`} className="btn btn-primary">Choose</Link>
                </div>
            </div>
            </div>)
}

    </div >
  )
}

export default UsersList