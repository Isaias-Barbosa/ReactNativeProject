import { db } from "./SQLite"

export function criaTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Carros" +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, preco DOUBLE, categoria TEXT, descricao TEXT);")
    })
}


export async function adicionaCarro(carro) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Carros (titulo, preco, categoria, descricao) VALUES (?, ?, ?, ?);", [carro.titulo,
            carro.preco, carro.categoria, carro.descricao], () => {
                resolve("Carro cadastrado com sucesso!")
            })
        })
    })

}

export async function buscaCarro() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Carros;", [], (transaction, resultado) => {
                resolve(resultado.rows._array)
            })
        })
    })

}