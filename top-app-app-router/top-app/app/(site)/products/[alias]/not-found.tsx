export default function NotFound({error}: {error: Error}) {
    console.log(error);
    return <>404</>
}