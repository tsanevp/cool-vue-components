'use strict';

var vue = require('vue');

var script = {
  __name: 'ToggleButton',
  props: {
  onIcon: {
    type: String,
    required: true,
  },
  offIcon: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
  },
},
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {

const props = __props;

const emit = __emit;

function toggle() {
  emit("update:modelValue", !props.modelValue);
}

return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass([__props.modelValue ? 'bg-white' : 'bg-[#8c8c8c]', "w-14 transition ease-in-out duration-200 h-100 flex items-center rounded-full p-1"]),
    onClick: toggle
  }, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass([{ 'translate-x-6': __props.modelValue }, "w-6 h-6 transition-all ease-in-out duration-200 transform bg-white rounded-full shadow-md flex content-center justify-center"])
    }, [
      vue.createCommentVNode(" <Transition name=\"fade\"> "),
      vue.createCommentVNode(" <div class=\"w-100 h-100 text-lg\"> "),
      vue.createCommentVNode(" <Icon v-if=\"modelValue\" :name=\"onIcon\" style=\"color: #8c8c8c\" class=\"w-100\" /> "),
      vue.createCommentVNode(" <Icon v-else :name=\"offIcon\" style=\"color: #00dc82\" class=\"w-100\" /> "),
      vue.createCommentVNode(" </div> "),
      vue.createCommentVNode(" </Transition> ")
    ], 2 /* CLASS */)
  ], 2 /* CLASS */))
}
}

};

script.__file = "src/ToggleButton.vue";

var components = { ToggleButton: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = plugin;
