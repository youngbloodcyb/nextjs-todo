import { table, getMinifiedRecord } from './utils/Airtable';

export default async (req, res) => {
    try {
        const records = await table.select({}).firstPage();
        const minifiedRecords = getMinifiedRecord(records);
        res.statusCode = 200;
        res.json(minifiedRecords);
    } catch(err) {
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
};