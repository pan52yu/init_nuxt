import { RouterConfig } from "nuxt/schema"

const customRoutes = [
  {
    path: "/users",
    name: "users",
    component: () => import("@/pages/users/index.vue"),
  },
  {
    path: "/users/create-or-edit",
    name: "users-create-or-edit",
    component: () => import("@/pages/users/create-or-edit.vue"),
  },
]

export default <RouterConfig>{
  routes: (_routes) => _routes.concat(customRoutes),
}
