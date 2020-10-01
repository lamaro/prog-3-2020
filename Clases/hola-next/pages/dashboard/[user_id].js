import { useRouter } from 'next/router'
import Link from 'next/link'

const User = ({ data }) => {

    //Traemos el parametro
    const router = useRouter()
    const { user_id } = router.query
    console.log(data)
    return (
        <div>
            {`El dashboard del usuario es: ${user_id}`}
            <Link href="/contact">
                <a>Go to Contact</a>
            </Link>
            <br/>
            {`El password del usuario es: ${process.env.NEXT_PUBLIC_USER_PASSWORD}`}
            <br/>
            {`mi mensaje es: ${data.status}`}
        </div>
    )
}

export async function getServerSideProps({ params }) {

    const { user_id } = params

    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/user/`,
        {
            method: 'POST',
            body: JSON.stringify({name:user_id, password:'mipass'})
        }
    )
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}


export default User