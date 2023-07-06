## learn Nuxt

### 路由

1. 配置路由

- 在 pages 文件夹下创建对应的文件夹和文件
  - nuxt 会自动创建路由
- 也可以在 nuxt.config.js 中配置路由

2. 路由导航跳转

- `<nuxt-link to="/about">About</nuxt-link>`
  > - 使用 nuxt-link 组件来实现路由跳转，不要使用 a 标签
  > - 使用 nuxt-link 进行调整不会重新加载页面，只会加载需要的组件 因为 nuxt 是一个 SPA 应用，会在客户端使用 js 来处理路由跳转
  > - 如果使用 a 标签，会导致页面重新加载，这样就不是 SPA 应用了

3. 动态路由

- 创建文件名 为 `[id].vue` 的文件
- 在组件中使用 `<nuxt-link to="/user/1">User</nuxt-link>` 进行跳转
- 在 `[id].vue` 组件中使用
  - const route = useRoute()
  - console.log(route.params.id) // 1

4. 自定义路由

- 创建文件 `app/router.options.ts`

```ts
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
```

- 这是指定路由器的推荐方法，因为它允许您使用 Vue Router 的所有功能，例如路由参数，嵌套路由，命名视图等。
- 使用路由器配置会覆盖 Nuxt.js 自动生成的路由配置。
- 如果返回 null 或 undefined，Nuxt.js 将使用自动生成的路由配置。
