import express from 'express'

const router= express.Router();

router.post('/upload',middleWare, uploadImage)