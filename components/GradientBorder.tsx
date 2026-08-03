export default function GradientBorder() {
  return (
    <div className="relative inline-block">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-white rounded-lg"></div>
    </div>
  )
}
