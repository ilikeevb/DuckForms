<template>
  <div>
    <div v-if="element.type == 'text-field'">
      <TextField :element="element" />
    </div>
    <div v-if="element.type == 'textarea'">
      <TextArea :element="element" />
    </div>
    <div v-if="element.type == 'text'">
      <TextX :element="element" />
    </div>
    <div v-if="element.type == 'radio'">
      <RadioButtons :element="element" />
    </div>
  </div>
</template>

<script>
  import TextArea from '@/components/LightElementsFolder/TextArea.vue'
  import TextX from '@/components/LightElementsFolder/TextX.vue'
  import TextField from '@/components/LightElementsFolder/TextField.vue'
  import RadioButtons from '@/components/LightElementsFolder/RadioButtons.vue'

  export default {
    name: 'LightElement',
    components: {
      TextArea, TextX, TextField, RadioButtons
    },
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
</style>