import React, {useEffect, useState} from 'react';

const Loader = () => {
    const [count,setCount] = useState(['.'])
    const [isLoaderLimit,setIsLoaderLimit] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if (count.length > 5){
                setCount((['.']))
            }
            else {
                setCount([...count,'.'])
            }
            if (!isLoaderLimit) {
                setIsLoaderLimit(true)
            }
        },500)
    }, [count])

    return (
        <div>
            {isLoaderLimit && <p className='text text_type_main-medium'>Loader{count.join('')}</p>}
        </div>
    );
}

export default Loader;
