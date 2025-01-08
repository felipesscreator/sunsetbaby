export default function Home() {
  return (
    <div className="flex h-screen bg-[url('/bg.png')] bg-cover bg-center p-2 md:py-10">
      <div className="mx-auto flex w-full max-w-[580px] flex-col rounded-md bg-gray-900 bg-opacity-90 px-2 pt-10 md:px-4 md:shadow-[0_1px_5px_5px_rgba(0,0,0,0.1)] md:shadow-[#d4af3760]">
        <div className="flex flex-col items-center justify-center space-y-2">
          <img src="sunset.jpg" className="w-32 rounded-full object-cover" />
          <h1 className="text-xl font-bold text-white">SUNSET BABY</h1>
          <p className="font-bold text-white">
            Artista Independente São Mateus - ZL
          </p>
        </div>

        <div className="space-y-4 pt-10">
          <a
            href="https://open.spotify.com/artist/7uWCSQrPk4K3QYcPTUf3EH?si=-4kXTSMMQeG6nzEZZCOO2g"
            target="_blank"
            className="flex h-16 cursor-pointer items-center gap-2 rounded-full bg-gray-700 p-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#92A2C2]"
          >
            <img src="spotify.svg" className="w-10 rounded-full" />
            <h1 className="mx-auto flex justify-center font-bold text-white">
              Spotify
            </h1>
          </a>
          <a
            href="https://on.soundcloud.com/2fbpNhB53oFAXh1G7"
            target="_blank"
            className="flex h-16 cursor-pointer items-center gap-2 rounded-full bg-gray-700 p-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#92A2C2]"
          >
            <img src="soundcloud.svg" className="w-10 rounded-full" />
            <h1 className="mx-auto flex justify-center font-bold text-white">
              SoundCloud
            </h1>
          </a>
          <a
            href="https://youtu.be/e8_y6JdW7E0?si=lKGCD9Z4GVYHozFo"
            target="_blank"
            className="flex h-16 cursor-pointer items-center gap-2 rounded-full bg-gray-700 p-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#92A2C2]"
          >
            <img src="youtube.svg" className="w-10 rounded-full" />
            <h1 className="mx-auto flex justify-center font-bold text-white">
              Youtube (500 comentário e o som sai no Spotify)
            </h1>
          </a>
        </div>
      </div>
    </div>
  )
}
