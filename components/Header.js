import Image from 'next/image'

function Header() {
  return (
    <div>
      This is the header
      <Image 
        src="/hulu-white.png"
        width={200}
        height={100}
      />
    </div>
  )
}

export default Header
