import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'

const SinglePost = ({ data }) => {
    const router = useRouter()
    const { id } = router.query

    const artist = data.find((artist) => artist._id === id)
    const { _id, name, avatar, genre } = artist
    return (
        <>
            <h1>{name}</h1>
            <h2>{genre}</h2>
            <img src={avatar} alt={name} />
            <br />
            <Link href="/index-ssr">
                <a>Volver</a>
            </Link>
        </>
    )
}

export default SinglePost


export async function getServerSideProps() {
    try {
        const response = await axios.get('https://artists-api.vercel.app/artists');
        const { data } = response
        return { props: { data } }
    } catch (error) {
        console.error('este es mi error', error);
        return { props: {} }
    }
}