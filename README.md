## learn Nuxt

### 路由

> https://nuxt.com/docs/guide/going-further/custom-routing#router-options

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

### 组件

> https://nuxt.com/docs/guide/directory-structure/components#components-directory

1. 组件的创建

- 在 components 文件夹下创建组件
- 在页面中使用 `<component-name></component-name>` 使用组件
- 在 components 文件夹下的组件会被自动注册为全局组件
- 用法和 vue 一样

2. 组件的传值

> todo...

### 布局

> https://nuxt.com/docs/guide/directory-structure/layouts

- 在 layouts 文件夹下创建布局文件
- 在 app.vue 是中使用
  - ```html
    <template>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
    ```

> 如果只有一个布局，可以直接在 app.vue 中写，不需要在 layouts 文件夹下创建布局文件

### SEO

> https://nuxt.com/docs/getting-started/seo-meta

- 在 `nuxt.config.js` 中配置

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Evan_Sky",
      meta: [{ name: "description", content: "My amazing site." }],
    },
  },
})
```

- 在 vue 组件中配置

```ts
<script setup>
useHead({
  title: 'Evan_Sky',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})
</script>
```

- 预定义组件

```vue
<script setup>
const title = ref("Hello World")
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>

    <h1>{{ title }}</h1>
  </div>
</template>
```

- ......
- 更多用法参考官网

### 静态资源

> https://nuxt.com/docs/getting-started/assets

- `public` 文件夹下的文件会被映射到根路径 `/` 下

  - 例如 引用 `public/img` 下的图片，可以使用 `/img/xxx.png` 进行引用
  - ```vue
    <template>
      <img src="/img/nuxt.png" alt="Discover Nuxt 3" />
    </template>
    ```
  - public 下的文件不会被 webpack 处理

- `assets` 文件夹下的文件会被 webpack 处理

  - 例如 引用 `assets/img` 下的图片，可以使用 `~/assets/img/xxx.png` 进行引用
  - ```vue
    <template>
      <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
    </template>
    ```
  - assets 下的文件会被 webpack 处理

### 配置

> https://nuxt.com/docs/getting-started/configuration

- runtimeConfig

  - 在 nuxt.config.js 中配置

    - ```ts
      export default defineNuxtConfig({
        runtimeConfig: {
          apiSecret: "123", // 仅在服务器端可用
          public: {
            // 在客户端和服务器端都可用
            baseURL: "http://localhost:3000",
          },
        },
      })
      ```

  - 在 vue 组件中使用
    - ```ts
      <script setup>const runtimeConfig = useRuntimeConfig()</script>
      ```

- env 文件

  - 在根目录下创建 `.env` 文件
  - ```ts
    NUXT_PUBLIC_BASE_URL = "https://bilibili.com"
    // 会覆盖 runtimeConfig 中的配置
    ```
