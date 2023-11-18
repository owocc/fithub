// import CredentialsProvider from 'next-auth/providers/credentials'
// import { NuxtAuthHandler } from '#auth'

// export default NuxtAuthHandler({
//   // TODO：设置一个强有力的秘密，请参阅https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler#secret
//   secret: process.env.AUTH_SECRET,
//   providers: [
//     // @ts-expect-error 您需要在这里使用.default才能在SSR期间工作。可能会在某个时候通过Vite修复
//     CredentialsProvider.default({
//       // 在登录表单上显示的名称（例如“登录...””）
//       name: 'Credentials',
//       // 凭据用于在登录页面上生成合适的表单。
//       // 您可以指定您希望提交的任何字段。
//       // 例如域名、用户名、密码、2FA令牌等。
//       // 您可以通过对象将任何HTML属性传递给<input>标签。
//       credentials: {
//         username: {
//           label: '用户名',
//           type: 'text',
//           placeholder: '用户名'
//         },
//         password: {
//           label: '密码',
//           type: 'password',
//           placeholder: '密码'
//         }
//       },
//       authorize (credentials: any) {
//         console.warn(
//           '注意：您应该用您的真实提供商或凭据提供商逻辑替换它！目前的设置不安全'
//         )
//         // 你需要在这里提供你自己的逻辑，接受凭据
//         // 提交并返回代表用户或值的对象
//         // 如果凭据无效，则为false/null。
//         // 注意：以下逻辑不安全或不适合身份验证！

//         const user = {
//           id: '1',
//           name: 'J Smith',
//           username: 'jsmith',
//           password: 'hunter2'
//         }

//         if (
//           credentials?.username === user.username &&
//           credentials?.password === user.password
//         ) {
//           // Any object returned will be saved in `user` property of the JWT
//           return user
//         } else {
//           console.error(
//             'Warning: Malicious login attempt registered, bad credentials provided'
//           )

//           // If you return null then an error will be displayed advising the user to check their details.
//           return null

//           // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//         }
//       }
//     })
//   ]
// })
