import connection from "../database/conexion";



export const categoryModal = {

    async readCategory() {
        const [sql]: any = await connection.execute('SELECT * FROM categories');
        return sql;
    },

    async createCategory(Cname: string) {
        const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); 
        const [sql] = await connection.execute('INSERT INTO categories (Cname, Cstatus, Ccreated) VALUES (?, ?, ?)', [Cname, 1, createdAt]);
        // await connection.end();
        return sql;
    },

    async updateCategory(Cid: number, Cname: string, Cstatus: number) {
        const [sql] = await connection.execute('UPDATE categories SET Cname = ?, Cstatus = ? WHERE Cid = ?', [Cname, Cstatus, Cid]);
        // await connection.end();
        return sql;
    },

    async deteleCategory(Cid: number) {
        const [sql] = await connection.execute('DELETE FROM categories WHERE Cid = ?', [Cid]);
        // await connection.end();
        return sql;
    },
    
    async readIdDCategory(Cid: number){ 
        const [sql]: any = await connection.execute('SELECT * FROM categories WHERE Cid = ?', [Cid]);
        return sql
    },

    async readCategoryId(Cid: number): Promise<boolean> { 
        const [sql]: any = await connection.execute('SELECT * FROM categories WHERE Cid = ?', [Cid]);
        return sql.length > 0;
    },

    async readCategoryName(Cname: string): Promise<boolean> { 
        const [rows]: any  = await connection.execute('SELECT * FROM categories WHERE Cname = ?', [Cname]);
    
        // `rows` es el array de resultados, y verificamos si hay resultados
        return rows.length > 0;
    }
    
};