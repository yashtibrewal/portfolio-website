
/**
 * 
 * @param param
 * @returns 
 */
export function Heading({ heading }: { heading: string }) {

    return (
        <div>
            <h1 className="text-4xl ml-3 md:ml-5 lg:ml-6 font-semibold text-my-yellow">{heading}</h1>
        </div>
    )

}