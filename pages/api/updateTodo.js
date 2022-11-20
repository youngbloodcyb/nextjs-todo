import { table, getMinifiedRecord } from './utils/Airtable';

export default async (req, res) => {
    const { id, fields } = req.body;

    try {
        const updatedRecord = await table.update([
            { id, fields },
        ]);
        
        res.statusCode = 200;
        res.json(getMinifiedRecord(updatedRecord));
    } catch(err) {
        console.error(err);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
};