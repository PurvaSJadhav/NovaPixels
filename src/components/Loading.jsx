export default function Loading() {
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin border-4 border-t-transparent w-10 h-10 scale-200 rounded-full border-green-300"></div>
            <p className='text-2xl text-gray-600 ml-8 font-semibold'>Enhancing Image</p>
        </div>
    </div>
  )
}