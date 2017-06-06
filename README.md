# Framework7 Vue + Webpack App Template multipage

A full-featured Framework7 + Vue + Webpack setup with hot-reload & css extraction. Based on [Vue Webpack Boilerplate](https://github.com/vuejs-templates/webpack)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

#如使用IDE或者插件实现同步，可以忽略以下几部，直接执行npm run dev
#安装apicloud-cli  
npm install apicloud -g

#开启wifi同步 
apicloud wifiStart --port 23456

#全量更新
apicloud wifiSync --project ./apicloud --updateAll true --port 23456

#增量更新
apicloud wifiSync --project ./apicloud --updateAll false --port 23456

```

## Project Structure

* `src/assets` - folder with static assets (images)
* `src/components` - folder with custom `.vue` components
* `src/module` - folfer with module files