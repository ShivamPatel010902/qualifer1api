exports.validateFile = async (file_b64) => {
    try {
      const fileBuffer = Buffer.from(file_b64, 'base64');
      const fileType = await fileTypeFromBuffer(fileBuffer);
      return {
        file_valid: true,
        file_mime_type: fileType.mime,
        file_size_kb: fileSizeInKb(fileBuffer),
      };
    } catch (error) {
      return {
        file_valid: false,
      };
    }
  };
  
  const fileTypeFromBuffer = async (buffer) => {
    // Use a library like file-type to determine the file type
    // For demonstration purposes, assume a PNG file
    return { mime: 'image/png' };
  };
  
  const fileSizeInKb = (buffer) => {
    return (buffer.length / 1024).toFixed(2);
  };
  