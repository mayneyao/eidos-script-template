/// <reference path="eidos.d.ts" />

interface Env {
  // add your environment variables here
}

interface Table {
  // add your tables here
  todos: EidosTable<{
    title: {
      name: string;
      type: string;
    };
  }>;
}

interface Input {
  // add your input fields here
  content: string;
}

interface Context {
  env: Env;
  tables: Table;
  currentRowId?: string;
}

export default async function (input: Input, context: Context) {
  console.log("Hello Eidos!");
  const tableId = context.tables.todos.id;
  const fieldMap = context.tables.todos.fieldsMap;
  const res = await eidos.currentSpace.addRow(tableId, {
    [fieldMap.title.name]: input.content,
  });
  console.log(res);
}
