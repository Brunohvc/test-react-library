import db from './config/firebase';


class Books {
    get() {
        return new Promise((resolve, reject) => {
            db.collection("books")
                .get()
                .then(res => {
                    console.log(res)
                    const data = res.docs.map(doc => doc.data());
                    console.log(data);
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
                    console.log(res)
                    resolve(res);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

export default new Books();