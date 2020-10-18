<template>
  <div>
    <div v-if="element.type == 'text-field'">
      <div><p class="label">{{element.label}}</p></div>
      <v-text-field :hint="element.text" persistent-hint outlined></v-text-field>
    </div>
    <div v-if="element.type == 'textarea'">
      <div><p class="label">{{element.label}}</p></div>
      <v-textarea :hint="element.text" persistent-hint outlined></v-textarea>
    </div>
    <div v-if="element.type == 'text'">
      <p class="label"><b>{{element.label}}</b></p>
      <p class="text">{{element.text}}</p>
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
.text {
  font-size: 16px;
}
</style>