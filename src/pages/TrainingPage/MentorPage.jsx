
const MentorPage = () => {
  return (
    <div className="flex flex-col items-center my-24">
        <h1 className="text-white text-2xl font-mono mb-16">Mentors</h1>
        <div className="flex justify-evenly w-full">
            <div className="w-28 h-28 rounded-full bg-color-mentor"></div>
            <div className="w-28 h-28 rounded-full bg-color-mentor"></div>
            <div className="w-28 h-28 rounded-full bg-color-mentor"></div>
            <div className="w-28 h-28 rounded-full bg-color-mentor"></div>

        </div>

        <div className="w-full px-8">
        <hr className="bg-gray-400 w-full h-[0.1px] mt-16 "/>

        </div>

    </div>
  )
}

export default MentorPage