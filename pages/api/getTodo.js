const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_ID);

const minifyRecords = (record) => {
    if (!record.fields.completed) {
        record.fields.completed = false;
    }
    return {
        id: record.id,
        fields: record.fields
    }
}

const getMinifiedRecord = (records) => {
    return records.map(record => minifyRecords(record));
}

export default async (req, res) => {
    const records = await table.select({}).firstPage();
    const minifiedRecords = getMinifiedRecord(records);
    res.statusCode = 200;
    res.json(minifiedRecords);
};