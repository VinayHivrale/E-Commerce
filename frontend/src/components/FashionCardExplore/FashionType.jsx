import { FashionCard } from './FashionCard.jsx';

export const FashionType = () => {
    return (
    <>
        <div className='flex  justify-center w-full mt-20 px-5  sm:flex-row  flex-col gap-5'>{/*mb-100*/}
            < FashionCard typeOfFashion="Men's Fashion" image="../src/assets/mensfashion.avif" />
            < FashionCard typeOfFashion="Women's Fashion" image="../src/assets/mensfashion.avif"/>
        </div>
    </>
    )
}
