export default async function (fastify, opts) {
    const {Terms } = fastify.db;

    fastify.post('/postTerms', async (request, reply) => {
        try{
            const {en_lang, swe_lang} = request.body;
            const newItem = await Terms.create({ en_lang, swe_lang });
            reply.code(201).send(newItem);
        } catch (error) {
            console.error(error.message);
            reply.code(500).send({error: 'Failed to create item', details: error.meesage});
        }
    });

    fastify.get('/getTerms', async(request, reply) => {
        try{
            // const items = await Terms.findAll();
            const latest = await Terms.findOne({
                order:[['updatedAt', 'DESC']],
            })
            if (!latest) return reply.code(404).send({ message: 'No records found' });
            return reply.code(200).send(latest);
        } catch(error) {
            return reply.code(500).send({error: "Failed to get items", details: error.message});
        }
    });
}