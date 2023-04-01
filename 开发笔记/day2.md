#### 1.编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误

声明式是没有这个问题的，vue-router底层处理好了

```js
function push(){
	return new Promise((resolve,reject)=>{
		
	})
}
```

编程式我们只需要在传参时，添加成功和失败的回调，函数体为空就行

```js
this.$router.push(
	{
		name: "search",
		params: {
		keyword: this.keyword || undefined,
	},
	},
		(success) => {
			// console.log(success);
	},
		(error) => {
			// console.log(error);
	}
);
```

但是治标不治本，在别的组件中还是会出现这个问题

##### 研究代码

this：当前组件实例

this.$router属性：当前的这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$route属性

push：VueRouter类原型对象的方法

所以我们可以重写 push和replace 方法。

```js
// 先把VueRouter原型对象的push先保存一份,但是备份在了window上，所以this指向window
let orginPush = VueRouter.prototype.push;

// 第一个额参数，告诉push方法，往哪里跳
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        orginPush.call(this, location, resolve, reject);
    } else {
        orginPush.call(this.location, () => { }, () => { })
    }
}
```



#### Home组件拆分

先把静态页面完成，拆分出静态组件，获取服务器的数据进行展示，动态业务的完成

##### 三级联动组件完成

由于三级联动，在Home、Search、Detail出现，所以注册为全局组件

##### 其余静态组件

HTML + CSS + 图片资源

#### Postman测试接口

返回code字段为200则成功

#### axios二次封装

XMLHttpRequest、fetch、JQ、axios

###### 为什么要二次封装axios？

请求拦截器、响应拦截器

请求拦截器：可以在发请求前处理一些业务、响应拦截器：当服务器数据返回以后，可以处理一些事情

###### 在项目中经常出现API文件夹【axios】

接口当中，路径都带有api

baseURL:"/api"

http://xxx.xxx:8080/api

axios基础不好可以参考git|NPM关于axios文档

#### 接口统一管理

项目很小：完全可以在组件的声明周期函数中发请求

项目很大：axios.get('xxx')

###### 跨域问题

协议、域名、端口号不同的请求，称之为跨域

#### nprogress进度条的使用

start：进度条开始

done：进度条结束

进度条颜色可以修改的，当然需要修改人家的样式

#### Vuex状态管理库

官方提供的状态管理库插件，集中式管理项目中组件共用的数据