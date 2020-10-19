<template>
  <v-hover v-slot:default="{ hover }">
    <v-card>
      <v-row align="center">
        <v-col cols="9">
          <v-card-title>{{element.label}}</v-card-title>
          <v-card-subtitle><v-icon left>mdi-radiobox-marked</v-icon>Один вариант</v-card-subtitle>
        </v-col>
        <v-col cols="3" align="center">
          <div v-if="hover">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="icon" v-bind="attrs" v-on="on">mdi-content-copy</v-icon>
              </template>
              <span>Копировать</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="icon" v-bind="attrs" v-on="on">mdi-iframe-outline</v-icon>
              </template>
              <span>Условия показа</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="icon" v-bind="attrs" v-on="on">mdi-delete</v-icon>
              </template>
              <span>Удалить</span>
            </v-tooltip>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'RadioButtons',
    props: ['element'],
    data() {
      return {

      }
    },
    methods: {

    }

  }
</script>

<style scoped>
.icon {
  padding-left: 5px;
  padding-right: 5px;
}
</style>