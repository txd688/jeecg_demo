<template>
  <a-input :placeholder="placeholder"
           :value="inputVal"
           @input="backValue"></a-input>
</template>
<script>
export default {
  name: "MInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: false
    },
    trim: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      inputVal: ''
    }
  },
  //允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    backValue (e) {
      let text = e.target.value;
      if (text && this.trim === true) {
        text = text.trim();
      }
      this.$emit("change", text)
    },
    initVal () {
      if (!this.value) {
        this.inputVal = ''
      } else {
        let text = this.value;
        this.inputVal = text;
      }
    }
  },
  watch: {
    value: {
      // 首次绑定执行
      immediate: true,
      handler: function () {
        this.initVal();
      }
    }
  }
}
</script>
