import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  // publicDir: "assets",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        diet: resolve(__dirname, "src/diet.html"),
        recipes: resolve(__dirname, "src/recipes.html"),
        blog: resolve(__dirname, "src/blog.html"),
        course: resolve(__dirname, "src/course.html"),
        cart: resolve(__dirname, "src/cart.html"),
        postitem: resolve(__dirname, "src/post-item.html"),
        blogitem: resolve(__dirname, "src/blog-item.html"),
        user: resolve(__dirname, "src/user.html"),
      },
    },
  },
});
