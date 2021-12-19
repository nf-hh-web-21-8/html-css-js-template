/**
 *
 * @param {string[]} strings
 * @param {(string | number)[]} args
 * @return {*}
 */
const html = (strings, ...args) =>
  strings
    .map((string, index) => `${string}${args[index] ?? ""}`)
    .join("")
    .replace(/\s+/g, " ")
    .replace(
      /(\s+)?(:|,|;|>|~|-|\/|\*|\+|\(|\)|\{|\})(\s+)?/g,
      (match, $1, $2) => $2
    )
    .replace(/;}/g, "}")
    .trim();

export default html;
