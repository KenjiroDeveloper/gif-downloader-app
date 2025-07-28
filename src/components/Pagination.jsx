
export const Pagination = ({ nextPage, prevPage, page }) => {

    return (

        <div className="block w-full text-center">
            <div className="join">
                <button onClick={prevPage} className="join-item btn">«</button>
                <button className="join-item btn">{page}</button>
                <button onClick={nextPage} className="join-item btn">»</button>
            </div>
        </div>
    )
}
