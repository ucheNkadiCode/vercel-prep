import { useRouter } from "next/router";

export default function Car() {
    const router = useRouter()
    const { carname } = router.query
    return <h1>Hello {carname} </h1>
}