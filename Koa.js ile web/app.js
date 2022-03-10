const Koa = require('koa');
const app = new Koa();
const Router=require('koa-router')
const router=new Router();


router.get('/index',(ctx)=>{
    ctx.body="<h1>index sayfasına hoşgeldiniz.</h1>",
    ctx.status=200;
    console.log("istek başarılı")
    
})

router.get('/hakkimda',(ctx)=>{
    ctx.body="<h1>hakkimda sayfasına hoşgeldiniz.</h1>",
    ctx.status=200;
    console.log("istek başarılı")
    
})
router.get('/iletisim',(ctx)=>{
    ctx.body="<h1>iletişim sayfasına hoşgeldiniz.</h1>",
    ctx.status=200;
    console.log("istek başarılı")
    
})

app.use(router.routes())

app.listen(3000);