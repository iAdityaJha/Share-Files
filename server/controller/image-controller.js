import File from '../database/models/file.js';

export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    };
    try {
        const file = await File.create(fileObj);
        // Use environment variable or default to localhost if not set
        const baseUrl = process.env.BASE_URL || `${request.protocol}://${request.get('host')}`;
        response.status(200).json({ path: `${baseUrl}/file/${file._id}` });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
};

export const downloadImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);
        if (!file) {
            return response.status(404).json({ error: 'File not found' });
        }
        file.downloadContent = (file.downloadContent || 0) + 1;
        await file.save();
        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
};






// // chatgpt corrected code 

// import File from '../database/models/file.js';

// export const uploadImage = async (request, response) => {
//     const fileObj = {
//         path: request.file.path,
//         name: request.file.originalname
//     }
//     try {
//         const file = await File.create(fileObj);
//         response.status(200).json({ path: `http://localhost:5000/file/${file._id}` });
//     } catch (error) {
//         console.error(error.message);
//         response.status(500).json({ error: error.message });
//     }
// }

// export const downloadImage = async (request, response) => {
//     try {
//         const file = await File.findById(request.params.fileId);
//         if (!file) {
//             return response.status(404).json({ error: 'File not found' });
//         }
//         file.downloadContent = (file.downloadContent || 0) + 1;
//         await file.save();
//         response.download(file.path, file.name);
//     } catch (error) {
//         console.error(error.message);
//         response.status(500).json({ error: error.message });
//     }
// }
