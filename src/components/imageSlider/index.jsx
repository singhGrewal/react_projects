import {useEffect, useState} from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import './styles.css'

export default function ImageSlider({url, page = 1, limit = 10}) {
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {

        if (url !== '') fetchImages(url)

    }, [url])

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = response.json()

            if (data) {
                setImages(await data)
                setLoading(false)
            }

        } catch (e) {
            setLoading(false)
            setErrorMessage(e.message)
        }

    }

    function handlePrevious() {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
    }

    function handleNext() {
        setCurrentImage(images.length - 1 === currentImage ? 0 : currentImage + 1)
    }

    function handleIndicator(index) {
        setCurrentImage(index)
    }


    if (loading) {
        return <div>Loading...</div>
    }
    if (errorMessage !== null) {
        return <div> Something went wrong: {errorMessage}</div>
    }

    return (
        <div className="container">
            <div className="slider-container">
                <BsArrowLeftCircleFill className={"arrow arrow-left"} onClick={handlePrevious}/>
                {images && images.length ? images.map((image, index) => {
                    return <img key={image.id} alt={image.download_url} src={image.download_url}
                                className={index === currentImage ? 'current-image' : "current-image hide-current-image"}/>

                }) : null}
                <BsArrowRightCircleFill className={"arrow arrow-right"} onClick={handleNext}/>
                <span className={"circle-indicators"}>
                {images && images.length ? images.map((_, index) => {
                    return <button key={index}
                                   className={currentImage === index ? "current-indicator" : "current-indicator inactive-indicator"}
                                   onClick={() => handleIndicator(index)}/>
                }) : null}
            </span>
            </div>
        </div>
    )
}
