export default function EventsDates() {
    const team = [
        {
            day: "Day 1",
            events: [["Welcome Teams", "9 AM"], ["Parks cars at Designated Areas", "before 5 PM"], ["Car show", "5:30-10 PM"]],
        },
        {
            day: "Day 2",
            events: [["Technical Inspection", "9 AM - 5 PM"], ["Dynamic Events", "Ends at 7 PM"], ["Theme Dinner", "Until 10 PM"]],
        },
        {
            day: "Day 3",
            events: [["Endurance Testing", "9 AM - 3 PM"], ["Lunch", "1-3 PM"], ["Closing", "3-5 PM"], ["Panel Decision Time", "3-4 PM"], ["Hi - Tea", "5-6 PM"]],
        }
    ]

    return (
        <section className="flex h-full w-full flex-col bg-white py-10">
           
            <div className="flex flex-row items-center justify-center gap-10 py-4 ">
                {team.map(member => (
                    <Card
                        key={member.day}
                        day={member.day}
                        events={member.events}

                    />
                ))}
            </div>
        </section>
    )
}

export const Card = ({
    day,
    events

}: {
    day: string
    events: string[][]

}) => {
    return (
        <div className="flex h-80 w-96 flex-col items-center  rounded-lg bg-secondary shadow-lg">

            <div className="mt-4 flex flex-col items-center  w-full h-full">
                <h1 className="text-4xl font-bold text-neutral-900 text-primary">{day}</h1>
                <div className="w-full h-2/3 p-4 flex flex-col justify-between">
                    {events.map((event, index) => {
                        return(
                            <div className="flex justify-between ">
                            <p className="text-lg font-normal text-neutral-500 ">{event[0]}</p>
                            <p className="text-sm font-normal text-neutral-500 ">{event[1]}</p>
    
                        </div>
                        )
                    })
}                    
                   


                </div>
            </div>
        </div>
    )
}
