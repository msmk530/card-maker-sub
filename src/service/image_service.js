class ImageService {
  async upload(file) {
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    return await res.json();
  }
}

export default ImageService;
