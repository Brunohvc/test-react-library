import db from './config/firebase';


class Books {
    get() {
        return new Promise((resolve, reject) => {
            db.collection("books")
                .get()
                .then(res => {
                    const data = res.docs.map(doc => { return { ...doc.data(), id: doc.id } });
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            db.collection("books")
                .doc(id)
                .get()
                .then(doc => {
                    const data = { ...doc.data(), id: doc.id };
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    post(values) {
        return new Promise((resolve, reject) => {
            db.collection("books")
                .add(values)
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    put(values, id) {
        return new Promise((resolve, reject) => {
            db.collection("books")
                .doc(id)
                .set(values)
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

export default new Books();