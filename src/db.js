import Dexie from 'dexie';

const db = new Dexie('sar');
// index only id, cuz there is nothing to search by field
db.version(1).stores({
    stats: `id`
});

export default db;
