function Body()
{
    return(
        <div className="flex flex-col items-center bg-amber-100 p-4 m-8 gap-8">

            <div className="flex flex-row justify-between gap-8">
                <div className="bg-amber-50 rounded-4xl">
                    <textarea className="size-[35rem] p-4" placeholder="Enter your text here"></textarea>
                </div>

                <div className="bg-amber-50 rounded-4xl">
                    <div className="size-[35rem] p-4"></div>
                </div>
            </div>

            <button className="bg-green-500 w-[10rem] rounded-md hover:cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"><text className="text-white">Summarize</text></button>

        </div>
    )
}

export default Body;