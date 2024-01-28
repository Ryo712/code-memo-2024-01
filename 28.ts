// Typescriptの型メモ
/*TypeScriptでは、すべてのパラメーターに明示的な型を持たせることが推奨されます。
警告メッセージ「パラメーター 'event' の型は暗黙的に 'any' になります。」は、
イベントハンドラーの event パラメーターに型が指定されていないために発生しています。*/
const handleSubmit = async (event) => {}
/*上記だと「パラメーター 'event' の型は暗黙的に 'any' になります」と出る。
event パラメーターに React.FormEvent<HTMLFormElement> 型を指定することで、この警告を解消*/