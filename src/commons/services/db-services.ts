import 'websql'
import { UserProfile } from '~/core/domain/entities/global/global-model'

const database = window.openDatabase('jobnavi.db', '1.0', 'db local from Tuan', 2 * 1024 * 1024)

export class DatabaseService {
  create() {
    database.transaction((tx) => {
      tx.executeSql(
        'create table if not exists user (id integer primary key, idUser text, displayName text, email text, role integer, accessToken text, status int)'
      )
    })
  }

  insert(user: UserProfile) {
    database.transaction((tx) => {
      tx.executeSql('INSERT INTO user (idUser, displayName, email, role, accessToken, status) VALUES (?,?,?,?,?, ?)', [
        user._id,
        user.displayName,
        user.email,
        user.role,
        user.accessToken,
        user.status
      ])
    })
  }

  select(callBackSuccess: (user: UserProfile) => void) {
    database.transaction((tx) => {
      tx.executeSql('SELECT * FROM user', [], (st: SQLTransaction, results: SQLResultSet) => {
        if (results.rows.length > 0) {
          const data = {
            _id: results.rows.item(0).iduser,
            accessToken: results.rows.item(0).accessToken,
            displayName: results.rows.item(0).displayName,
            email: results.rows.item(0).email,
            role: results.rows.item(0).role,
            status: results.rows.item(0).status
          }
          callBackSuccess(data)
        }
      })
    })
  }

  delete(callBackSuccess?: () => void) {
    database.transaction((tx) => {
      tx.executeSql('DELETE FROM user', [], (st: SQLTransaction, results: SQLResultSet) => {
        if (callBackSuccess) {
          callBackSuccess()
        }
      })
    })
  }
}
