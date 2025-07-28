import { useCallback, useEffect, useState } from "react"
import { getGifs } from "../helpers";


export const useFetchGif = (category, offset) => {

    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchGifs = useCallback(async () => {
        const gifs = await getGifs(category, offset)
        setGifs(gifs)
        setLoading(false)
    }, [category, offset])

    useEffect(() => {

        if (!category.trim()) return

        fetchGifs()
    }, [category, offset, fetchGifs])

    return {
        gifs,
        loading
    }


}