<template>
  <div>
    <div v-if="element.label"><p class="label">{{element.label}}</p></div>
    <div v-if="element.type == 'text-field'">
      <v-text-field outlined></v-text-field>
    </div>
    <div v-if="element.type == 'textarea'">
      <v-textarea outlined></v-textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Element',
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
</style>