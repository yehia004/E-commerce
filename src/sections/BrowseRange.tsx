import Mask from '../assets/mask.png';
import Mask1 from '../assets/mask1.png';
import Mask2 from '../assets/mask2.png';

const BrowseRange = () => {
  return (
    <div className="bg-white max-w-80%   flex flex-col items-center p-4 mt-6">
        <h2 className="text-4xl font-semibold text-gray-700">Browse Range</h2>
        <p className='text-xl font-light text-grey-500 m-4' >Select a price range to filter products:</p>
        {/* <input type="range" min="0" max="1000" /> */}
        <div className="grid grid-cols-3 gap-4">
            <div >
                <img className='min-h-full' src={Mask2} alt="" />
                <p className='text-2xl text-center mt-4 font-semibold'>Living</p>
            </div>
            <div>
                <img className='h-full' src={Mask1} alt="" />
                <p className='text-2xl text-center mt-4 font-semibold'>Bedroom</p>
                </div>
            <div>

                <img className='h-full' src={Mask} alt="" />
                <p className='text-2xl text-center mt-4 font-semibold'>Dining</p>
            </div>
        </div>
    </div>
  )
}

export default BrowseRange;