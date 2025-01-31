import { GridItem } from './GridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ( {category} ) => {

    const { images, isLoading } = useFetchGifs ( category );

    return (
        <>
            <h3> { category }</h3>

            {
                isLoading && ( <h2> Loading energyyy...! </h2> )
            }



            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GridItem 
                            key={ image.id } 
                            {...image}
                            />
                    ))
                }
            </div>
        </>
    )
}


