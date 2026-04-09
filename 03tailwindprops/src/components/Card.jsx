function Card({ username, btnText="click me" }) {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div
        className="w-80 h-52 rounded-xl bg-cover bg-center relative text-white shadow-lg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')"
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

        {/* Content */}
        <div className="relative p-4 flex flex-col justify-end h-full">
          <h2 className="text-xl font-bold">{username}</h2>
          <p className="text-sm mt-1">
            Discover beautiful places around the world.
          </p>

          <button className="mt-3 bg-blue-500 px-4 py-2 rounded-lg text-sm hover:bg-blue-600 w-fit">
            {btnText}
          </button>
        </div>

      </div>

    </div>
    </>
  )
}

export default Card