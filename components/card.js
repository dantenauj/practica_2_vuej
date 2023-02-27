Vue.component(
    'card',
    {
        template:    `<div>  

                        <div class="container">
                            <div class="row">
                            <h3>{{producto.nombre}}</h3>
                            </div>
                            <div class="row">
                            <div class="col-12 col-sm-6 col-md-4">
                                <img :src="producto.imagen" alt="" width="100%" />
                            </div>
                            <div class="col-12 col-sm-6 col-md-8">
                                <h6>{{producto.descripcion}}</h6>
                                <div
                                class="p-3 mb-2 text-white"
                                :style="configuracionPagina.precioEstilos"
                                >
                                Precio {{producto.precio}} BOV
                                </div>
                                <h5>Color</h5>
                                <div>
                                <div
                                    class="color-box clic"
                                    :style="{ backgroundColor: item }"
                                    v-for="item in producto.colores"
                                    :key="item.etiqueta"
                                    @click="colorSelecionado(item)"
                                ></div>
                                </div>
                                <h5>Cantidad</h5>
                                <div class="quantity">
                                <button @click="menosCantidad()">-</button>
                                <div>{{pedido.cantidad}}</div>
                                <button @click="masCantidad()">+</button>
                                </div>
                                <div class="buy-box">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    @click="comprar(pedido, producto)"
                                >
                                    Comprar
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                         <div class="container">
                            <div class="row">
                            <h4>Productos relacionados</h4>
                            </div>
                            <div class="row">
                            <div
                                class="col"
                                v-for="producto in productosRelacionados"
                                :key="producto.id"
                            >
                                <div class="card" style="width: 18rem">
                                <div class="card-body">
                                    <h5 class="card-title">{{producto.nombre}}</h5>
                                    <img :src="producto.imagen" alt="" width="100%" />
                                    <p class="card-text">{{producto.descripcion}}</p>
                                    <div class="producto-relacionado-precio">
                                    Precio:{{producto.precio}} BOB
                                    </div>
                                    <div>
                                    <div>
                                        <div
                                        class="color-box"
                                        :style="{ backgroundColor: item }"
                                        v-for="item in producto.colores"
                                        :key="item.etiqueta"
                                        ></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>


                    </div>`,    
        data: function(){
            return {
                     configuracionPagina: {
            precioEstilos:
              'background: orangered; color: white; font-weight: bold',
          },
                  producto: {
                        id: 1,
                        imagen:
                        'assets/images/Dron-LU3-MAX-GPS-8K-HD-profesional-con-c-mara-Dual-card-n-autoestabilizador-Motor-sin.jpg_Q90.jpg_',
                        nombre: 'Dron LU3 MAX GPS 8K HD',
                        descripcion:
                        'Dron LU3 MAX GPS 8K HD profesional con &lt;b&gt;cámara Dual cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricóptero plegable',
                        precio: '620',
                        colores: ['red', 'blue', 'black', 'yellow'],
                    },
                    productosRelacionados: [
                        {
                        id: 2,
                        imagen:
                            'assets/images/Dron-plegable-KF102-con-Gps-8K-c-mara-Dual-HD-2-ejes-card-n-Motor-sin.jpg_Q90.jpg_.webp&quot',
                        nombre: 'KF102',
                        descripcion:
                            'Dron plegable KF102 con Gps, 8K, cámara Dual HD, 2 ejes, cardán, Motor sin escobillas, fotografía aérea, 1200M de distancia, novedad de 2022',
                        precio: 1180,
                        colores: ['orange', 'blue'],
                        },
                        {
                        id: 3,
                        imagen:
                            'assets/images/KBDFA-Dron-E888-RC-cuadric-ptero-profesional-FPV-4K-HD-fotograf-a-a-rea-evitaci-n.jpg_Q90.jpg_.webp&quot',
                        nombre: 'KBDFA-Dron E888 RC',
                        descripcion:
                            'KBDFA-Dron E888 RC, cuadricóptero profesional FPV, 4K HD, fotografía aérea, evitación de obstáculos, helicóptero, juguetes de distancia',
                        precio: 154,
                        colores: ['black', 'midnightblue'],
                        },
                        {
                        id: 4,
                        imagen:
                            'assets/images/Dron-Profesional-4K-con-GPS-8K-c-mara-HD-3-ejes-card-n-antivibraci-n-evitaci.jpg_Q90.jpg_.webp',
                        nombre: 'Dron Profesional 4K con GPS',
                        descripcion:
                            'Dron Profesional 4K con GPS, 8K, cámara HD, 3 ejes, cardán antivibración, evitación de obstáculos, fotografía aérea, Quadcopter, nuevo',
                        precio: 1800,
                        colores: ['teal', 'blue', 'slategrey', 'navy'],
                        },
                    ],
             pedido: {
            id: 1,
            cantidad: 1,
            color: 'red',
          },
            }
        },

        methods: {
          comprar(pedido, producto) {
            pedido.producto = producto.nombre
            console.log(pedido, producto)
            alert(JSON.stringify(pedido))
          },
          colorSelecionado(color) {
            this.pedido.color = color
          },
          masCantidad() {
            this.pedido.cantidad++
          },
          menosCantidad() {
            if (this.pedido.cantidad > 1) {
              this.pedido.cantidad--
            }
          },
        },

        props: ["titulo"],
        mounted() {
            this.numero =10
        },
    }
);