<h1>Proyecto Ecommerce Vue.js</h1>
<p>Proyecto personal de una app ecommerce para el curso de Vue.js de Coderhouse. Se simula una Tienda Gourmet online con modalidad de envío a domicilio. El sitio es Full Responsive, adaptado para mobile, tablet y desktop.</p>

<h2>Tecnologías Utilizadas</h2>

<ul>
    <li>Html5</li>
    <li>Css3</li>
    <li>Vue.js v2.6.14</li>
    <li>Vue Router v3.5.1</li>
    <li>Vuex v3.6.2</li>
    <li>Vuetify v2.6.0</li>
    <li>Vue Toasted v1.1.28</li>
    <li>MockAPI (backend)</li>
</ul>

<h2>Usabilidad</h2>
<h3>Cliente Administrador</h3>
<p>User: <strong>admin@coder.com</strong></p>
<p>Pass: <strong>111111</strong></p>
<p>El usuario Administrador posee un menu diferente al de un usuario-cliente, cuyos items son:</p>
<ul>
    <li>
    Productos: posee un listado de todos los productos de la App, pudiendo crear nuevos, modificar y eliminar los existentes.
    </li>
    <li>
    Usuarios: listado de usuarios con los datos de registración y con la opción de cambiar el rol de determinado usuario, ya sea de Admin a Cliente o viceversa.
    </li>
    <li>
    Pedidos: aquí se listan los pedidos de los clientes, los cuales tienen 2 fases: pagados y enviados. Estas funcionalidades se habilitan mediante un "switch": cuando abonen se habilita el Envío a domicilio. Cuando se envia, la fila se resalta el fondo para entender que el pedido está completado.
    </li>
</ul>





# proyecto-final-coder

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
