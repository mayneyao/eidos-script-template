/// <reference path="eidos.d.ts" />
export const name = "Todo";
export const description = "Add a todo to the table";
export default async function (input, context) {
    console.log("Hello Eidos!");
    const tableId = context.tables.todos.id;
    const fieldMap = context.tables.todos.fieldsMap;
    const res = await eidos.currentSpace.addRow(tableId, {
        [fieldMap.title.name]: input.content,
    });
    console.log(res);
}
