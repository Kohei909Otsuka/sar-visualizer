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
    .toArray();
};

export const fetchStat = (id) => {
  return db.table(TABLE)
    .get(id);
};

export const deleteStat = (id) => {
  return db.table(TABLE)
    .delete(id);
};
