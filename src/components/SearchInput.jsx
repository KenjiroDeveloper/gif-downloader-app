
export const SearchInput = ({ setValue, value }) => {

    const onChangeValue = (e) => {
        setValue( e.target.value )
    }

    return (
        <>
            <input
                value={ value }
                onChange={ onChangeValue }
                type="text"
                placeholder="Search"
                className="input join-item input-bordered w-48 md:w-auto" />
        </>
    )
}
