<template>
  <section class="wrapper search-bar">
    <template v-for="item in mainData">
      <div
        class="items"
        :key="item.id"
        v-if="item.type == 'text'"
        :style="itemStyle(item.inputStyle)"
      >
        <label class="label">{{item.lable}}</label>
        <Input
          :placeholder="item.palceholder"
          v-model="item.value"
          :size="item.inputStyle.size && item.inputStyle.size"
          @change="inputValueChange($event, item)"
          :style="classObject(item.inputStyle)"
          class="vertical-align-bottom"
          :class="item.inputStyle.inputClassName && item.inputStyle.inputClassName"
        />
      </div>
    </template>
    <slot></slot>
  </section>
</template>
<script>
import { Input } from 'element-ui'
export default {
  name: "SuppleSearchBar",
  props: ["data"],
  components: { Input },
  data() {
    return {
      mainData: this.data
    };
  },
  methods: {
    inputValueChange(e, item) {
      this.$emit("inputValueChange", e, item);
    }
  },
  computed: {
    classObject() {
      return function(data) {
        let options = {};
        if (data.width) {
          options.width = data.width + "px";
        }
        if (data.borderRadius) {
          options.borderRadius = data.borderRadius + "px";
        }
        return options;
      };
    },
    itemStyle() {
      return function(data) {
        let options = {};
        if (!data.size) {
          options.lineHeight = "40px";
        } else if (data.size == 'medium') {
          options.lineHeight = "36px";
        } else if (data.size == 'small') {
          options.lineHeight = "32px";
        } else if (data.size == 'mini') {
          options.lineHeight = "28px";
        }

        return options;
      };
    }
  }
};
</script>

