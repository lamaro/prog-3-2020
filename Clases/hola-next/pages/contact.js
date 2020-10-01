import Link from 'next/link'
import Form from '../components/Form'

const Contact = () => {
    console.log("ESTOY DEL LADO DEL CLIENTE")
    return (
        <>
            <Link href="/dashboard/amaro">
                <a>Go to your dashboard</a>
            </Link>
            <Form />
        </>
    )
}

export default Contact