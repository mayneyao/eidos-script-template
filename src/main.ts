/// <reference path="eidos.d.ts" />

interface Env {
  // add your environment variables here
}

interface Table {
  // add your tables here
  todos: EidosTable<{
    title: string;
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
  const tableName = context.tables.todos.name;
  const fieldMap = context.tables.todos.fieldsMap;
  const res = await eidos.currentSpace.addRow(tableName, {
    [fieldMap.title]: input.content,
  });
  console.log(res);
}
