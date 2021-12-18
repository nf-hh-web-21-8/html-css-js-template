import process from "process";
import path from "path";
import browserSync from "browser-sync";

browserSync({
  open: true,
  port: 3000,
  ghostMode: false,
  server: {
    index: "index.html",
    baseDir: path.resolve(process.cwd(), "public"),
  },
  files: ["public/{**/*,*}.{css,html,js}"],
});
