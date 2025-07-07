// file is coming from file system that is server
//it give local path for the file and we add this file to the clodenry
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";//file system from the node



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

    const uploadOnCloudinary = async(localPath)=>{
         try {if (!localPath) return null
        //upload the file to cloudinary
       const response = await cloudinary.uploader.upload(localPath, {resource_type: 'auto'})
        console.log("File uploaded successfully on the cloudinary", response.url);
        return response;
         } catch(error){
            fs.unlinkSync(localPath) //remove the locally saved temprory file as the upload operation got failed
            return null;
         }
    }
//method creation in that pass in parameter local file ka path for upload ,if uploded successfully then unlink or delete it


cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/0lympic_flag.jpg",
{public_id: "olympic_flag" },
function(error, result) {console.log(result); });