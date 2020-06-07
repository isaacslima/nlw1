import express from 'express';
import knex from './database/connection'

const routes  = express.Router();


routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return { 
            title: item.name,
            image_url: `http://localhost/3333/uploads/${item.image}`
        };
    })
    return response.json(items);
});

routes.post('/points', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        number,
        city,
        uf,
        items
    } = request.body;

    await knex('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        number,
        city,
        uf
    });

    return response.json({ success: true});
})

export default routes;