<template>
  <div>
    <div v-if="element.type == 'text-field'">
      <v-card>
        <v-card-title>
          {{element.label}}
        </v-card-title>
        <v-card-subtitle>
          <v-icon left>mdi-form-textbox</v-icon>Короткий текст
        </v-card-subtitle>
      </v-card>
    </div>
    <div v-if="element.type == 'textarea'">
      <v-hover v-slot:default="{ hover }">
        <v-card>
          <v-row align="center">
            <v-col cols="9">
              <v-card-title>{{element.label}}</v-card-title>
              <v-card-subtitle><v-icon left>mdi-form-textarea</v-icon>Длинный текст</v-card-subtitle>
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
    </div>
    <div v-if="element.type == 'text'">
      <v-card>
        <v-card-title>
          {{element.label}}
        </v-card-title>
        <v-card-subtitle>
          <v-icon left>mdi-text</v-icon>Текст без вопроса
        </v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LightElement',
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
.label {
  font-size: 18px;
}
.text {
  font-size: 16px;
}
.delete {
  text-align: right; 
}
.icon {
  padding-left: 10px;
  padding-right: 10px;
}
</style>