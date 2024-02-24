import Capa from '../../assets/Capa 1.png'

export const CapaImg = () => {
  return (
    <div className='relative'>
        <img
        src={Capa}
        alt="capa img"
        className='absolute h-[290px] max-[500px]:h-[150px] w-[100%] top-[-17vh]'
    />
    </div>
  )
}
