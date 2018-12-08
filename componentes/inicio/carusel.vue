<template>
  <v-app transparent>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex>
          <v-card>
            <v-container fluid grid-list-xs overflow-y-hidden>
              <v-layout>
                <v-flex>
                  <v-card>
                    <v-card-title
                      class="justify-center pa-1"
                      style="min-width:210px"
                    >
                      TIPOS HOLA
                    </v-card-title>
                    <v-list
                      dense
                      class="pa-0"
                      style="border-top: 1px solid rgba(130,130,130,0.5);"
                    >
                      <v-list-tile class="align-center">
                        <v-list-tile-content class="align-start">
                          Contrato BIMENSUAL
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                    <v-list
                      dense
                      class="pa-0"
                      style="border-top: 1px solid rgba(130,130,130,0.5);"
                    >
                      <v-list-tile class="align-center">
                        <v-list-tile-content class="align-start">
                          Contrato Anual
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                    <v-list
                      dense
                      class="pa-0"
                      style="border-top: 1px solid rgba(130,130,130,0.5);"
                      v-for="(param, ind_param) in parametros"
                      :key="ind_param"
                    >
                      <v-list-tile class="align-center">
                        <v-list-tile-content class="align-start">
                          {{ param }}
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
                <v-flex v-for="dato in datos" :key="dato.title">
                  <v-hover>
                    <v-card
                      slot-scope="{
                        hover
                      }"
                      :class="`elevation-${hover ? 12 : 2}`"
                      style="min-width:170px"
                    >
                      <v-card-title class="justify-center pa-1">
                        {{ dato.title }}
                      </v-card-title>
                      <v-list
                        dense
                        class="pa-0"
                        style="border-top: 1px solid rgba(130,130,130,0.5);"
                      >
                        <v-list-tile class="align-center">
                          <v-list-tile-content class="align-start">
                            ${{ dato.precio.mes }}/mes
                          </v-list-tile-content>
                          <v-list-tile-content class="align-end">
                            (${{ dato.precio.mes * 12 }} anual)
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
                      <v-list
                        dense
                        class="pa-0"
                        style="border-top: 1px solid rgba(130,130,130,0.5);"
                      >
                        <v-list-tile class="align-center">
                          <v-list-tile-content class="align-start">
                            ${{ dato.precio.año }}/anual
                          </v-list-tile-content>
                          <v-list-tile-content class="align-end">
                            (${{ dato.precio.año / 12 }} mes)
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>

                      <v-list
                        dense
                        v-for="(propiedad, ind_prop) in dato.propiedades"
                        :key="ind_prop"
                        class="pa-0"
                        style="border-top: 1px solid rgba(130,130,130,0.5);"
                      >
                        <v-list-tile class="align-center">
                          <v-list-tile-content class="align-center">
                            <v-list-tile-content
                              v-show="propiedad !== true && propiedad !== false"
                              class="align-end"
                              v-text="propiedad"
                            >
                              <!--
                                V-show, muestra o activa la etiqueta o Componente, siempre y cuando la condicioón sera verdadera. Tambien existe v-if, v-else-if y else
                              -->
                            </v-list-tile-content>
                            <v-icon color="green" v-show="propiedad === true"
                              >check_circle</v-icon
                            >
                            <v-icon color="red" v-show="propiedad === false"
                              >highlight_off</v-icon
                            >
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      Titulos: ["CARACTERÍSTICAS", "PERSONAL", "PYMES", "ENTERPRISE"],
      parametros: [
        "Almacenamiento SSD",
        "Banda Ancha",
        "Dominio",
        "Certificación SSL",
        "Base de Datos MySQL",
        "SiteBuilder",
        "Email Corporativo",
        "Soporte técnico "
      ],
      datos: [
        {
          title: "PERSONAL",
          src:
            "https://www.nopcommerce.com/images/blog/17-April-A-guide-on-selecting-a-profitable-product-to-sell-online---Part-1/business_idea_pic.jpg",
          flex: 12,
          text: "Características",
          propiedades: ["3GB", "Agotada", 2, true, 1, false, 3, "24/7"],
          precio: {
            mes: 3.75,
            año: 39
          }
        },
        {
          title: "PYMES",
          src:
            "https://www.wardsauto.com/sites/wardsauto.com/files/uploads/2015/12/online-car-buying.jpg",
          flex: 12,
          text: "Características",
          propiedades: ["7GB", "Ilimitada", 5, true, 2, true, 7, "24/7"],
          precio: {
            mes: 5,
            año: 51
          }
        },
        {
          title: "ENTERPRISE",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 12,
          text: "Características",
          propiedades: [
            "25GB",
            "Ilimitada",
            "Ilimitada",
            true,
            "Ilimitada",
            true,
            "Ilimitada",
            "24/7"
          ],
          precio: {
            mes: 7.5,
            año: 75
          }
        }
      ]
    };
  }
};
</script>
