import UploadImage from "./UploadImage";
import PreviewImage from "./PreviewImage";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhancedImageAPI";

const Home = ({ setEnhancedImage: setEnhancedImageApp }) => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setloading(true);
        try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setEnhancedImageApp(enhancedURL?.image); 
            setloading(false);
        } catch (error) {
            console.log(error);
            alert("Error while enhancing the image. Please try again later.");
        }
    };

    return (
        <>
            <UploadImage UploadImageHandler={UploadImageHandler} />
            <PreviewImage
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage?.image}
            />
        </>
    );
};

export default Home;