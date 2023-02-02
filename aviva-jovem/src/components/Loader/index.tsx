import { Dot, LoadingWrapper } from './style'

const Loader = () => {
   


    return (   
        <LoadingWrapper>
            <Dot delay="0s" />
            <Dot delay="0.1s" />
            <Dot delay="0.2s" />
        </LoadingWrapper>
    )

}

export default Loader;