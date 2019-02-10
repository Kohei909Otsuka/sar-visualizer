import db from './../db';

const TABLE = 'stats';

export const createStat = (stat) => {
  db.table(TABLE)
    .add(stat)
    .then(id => {
      console.log('added to indexedDB', id)
    })
};

export const fetchStats = () => {
  return db.table(TABLE)
    .toArray()
};

export const fetchStat = (id) => {
  db.table(TABLE)
    .get(id)
    .then(stat => {
      console.log('fetch one from indexedDB', stat);
    })
};
