

export const GifForm = ({ onSearch, children }) => {

    return (
        <form onSubmit={onSearch} className="join">
            {children}
        </form>
    )
}
