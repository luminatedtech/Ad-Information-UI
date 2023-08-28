function Filter ({category,onCategoryChange}) {
    return (
        <>
            <select
                name="filter"
                value={category}
                onChange={(e)=> onCategoryChange(e.target.value)}
            >
                <option value="All"> Filter by Cost</option>
                <option value="Ascending"> Low-High</option>
                <option value="Descending"> High-Low</option>
            </select>
        </>
    )
}
export default Filter