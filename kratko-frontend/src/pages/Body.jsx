function Body()
{
    return(
        <div className="bg-amber-100 p-4 m-8 flex flex-row justify-between">
            <div className="bg-amber-50 rounded-4xl">
                <textarea className="size-[35rem] p-4" placeholder="Enter your text here"></textarea>
            </div>

            <div className="bg-amber-50 rounded-4xl">
                <div className="size-[35rem] p-4"></div>
            </div>
        </div>
    )
}

export default Body;