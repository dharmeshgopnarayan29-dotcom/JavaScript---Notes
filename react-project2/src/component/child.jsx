import { useEffect } from "react";


function Child(prop) {
    useEffect(() => {
        console.log("Child Mounted");

        return () => {
            console.log("Child Unmounted")
        }
    }, [prop.stop])

    return (
        <h1>Child</h1>
    )
}

export default Child;