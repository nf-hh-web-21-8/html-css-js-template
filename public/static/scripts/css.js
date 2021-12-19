const css = (strings, ...args) =>
  strings
    .map((string, index) => `${string}${args[index] ?? ""}`)
    .join("")
    .replace(/\s+/g, " ")
    .replace(
      /(\s+)?(:|,|;|>|~|-|\/|\*|\+|\(|\)|\{|\})(\s+)?/g,
      (match, $1, $2, $3) => $2
    )
    .replace(/;}/g, "}")
    .trim();

export default css;
