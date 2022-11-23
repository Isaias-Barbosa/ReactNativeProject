import { db } from "./SQLite"

export function criaTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Tarefas " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria_desenvolvimento TEXT, categoria_tarefa TEXT, texto TEXT);")
    })
}

export async function adicionaTarefa(tarefa) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Tarefas (titulo, categoria_desenvolvimento, categoria_tarefa, texto) VALUES (?, ?, ?, ?);", [tarefa.titulo, tarefa.categoria_desenvolvimento, tarefa.categoria_tarefa, tarefa.texto], () => {
                resolve("Nota adicionada com sucesso!")
            })
        })
    })
}

export async function atualizaTarefa(tarefa) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("UPDATE Tarefas SET titulo = ?, categoria_desenvolvimento = ?, categoria_tarefa =?, texto = ? WHERE id = ?;", [tarefa.titulo, tarefa.categoria_desenvolvimento, tarefa.categoria_tarefa, tarefa.texto, tarefa.id], () => {
                resolve("Nota atualizada com sucesso!")
            })
        })
    })
}

export async function removeTarefa(tarefa) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("DELETE FROM Tarefas WHERE id = ?;", [tarefa.id], () => {
                resolve("Nota removida com sucesso!")
            })
        })
    })
}

export async function buscaTarefa() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Tarefas;", [], (transaction, resultado) => {
                resolve(resultado.rows._array)
            })
        })
    })
}

export async function filtraPorCategoria(categoria) {
    return new Promise((resolve) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM Tarefas WHERE categoria_desenvolvimento = ?;", [categoria], (tx, results) => {
                resolve(results.rows._array)
            })
        })
    })
}