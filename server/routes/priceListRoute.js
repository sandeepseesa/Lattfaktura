
export default async function (fastify, opts) {
    const { PriceList } = fastify.db;

    fastify.post('/priceList', async (request, reply) => {
        try {
            const { articleNo, productName, inPrice, price, unit, inStock, description } = request.body;

            const newItem = await PriceList.create({
                articleNo,
                productName,
                inPrice,
                price,
                unit,
                inStock,
                description
            });
            reply.code(201).send(newItem);
        } catch (error) {
            reply.code(500).send({ error: 'Failed to create item', details: error.message });
        }
    });

    fastify.get('/priceList', async (request, reply) => {
        try{
            const items = await PriceList.findAll();
            reply.code(200).send(items);
        } catch (error) {
            reply.code(500).send({ error: 'Failed to fetch items', details: error.message });
        }
    });

    fastify.post('/priceList/:id', async (request, reply) => {
        try{
            const { id } = request.params;
            const { articleNo, productName, inPrice, price, unit, inStock, description } = request.body;

            const item = await PriceList.findByPk(id);
            if (!item) {
                return reply.code(404).send({ error: 'Item not found' });
            }
            item.articleNo = articleNo;
            item.productName = productName;
            item.inPrice = inPrice;
            item.price = price;
            item.unit = unit;
            item.inStock = inStock;
            item.description = description;
            await item.save();
            reply.code(200).send(item);
        } catch (error) {
            reply.code(500).send({ error: 'Failed to update item', details: error.message });
        }

    });

    fastify.delete('/priceList/:id', async (request, reply) => {
        try{
            const { id } = request.params;
            const item = await PriceList.findByPk(id);
            if (!item) {
                return reply.code(404).send({ error: 'Item not found' });
            }
            await item.destroy();
            reply.code(204).send();
        } catch (error) {
            reply.code(500).send({ error: 'Failed to delete item', details: error.message });
        }
    });
}