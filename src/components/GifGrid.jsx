import { useEffect, useState } from "react"
import { Pagination, GifItem, Hero } from './index'

import { useFetchGif } from "../hooks/useFetchGifs";


export const GifGrid = ({ category, hasSearched, setCategory }) => {

    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);
    const { gifs, loading } = useFetchGif(category, offset);

    const handlePreviousPage = () => {
        if (page === 1) return;
        setOffset(offset - 9);
        setPage(page - 1);
    }

    const handleNextPage = () => {
        setOffset(offset + 9);
        setPage(page + 1);
    }

    useEffect(() => {
        setOffset(0);
        setPage(1);

    }, [category]);


    return (
        <div className="flex flex-wrap m-4 gap-2 justify-center">
            {!hasSearched && loading &&
                <Hero setCategory={setCategory} />
            }

            {
                category && (
                    <div className="block w-full text-center mb-3">
                        <h2 className="font-bold text-2xl"> Results for: {category} </h2>
                    </div>
                )
            }

            {hasSearched && loading && (
                <span className="loading loading-spinner loading-xs"></span>
            )}

            {
                gifs.map((gif) => (
                    <GifItem key={gif.id} {...gif} />
                ))

            }

            {
                category && (
                    <Pagination
                        nextPage={handleNextPage}
                        prevPage={handlePreviousPage}
                        page={page} />
                )
            }
        </div>
    )
}
