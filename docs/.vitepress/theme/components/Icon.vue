<template>
  <span class="icon" :style="iconStyle(type)"></span>{{ contents }}
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'badend',
      validator: function (value) {
        // Only allow specific icon types
        return [
            'badend',
            'be',
            'default'
        ].indexOf(value) !== -1
      }
    },
    contents: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      basePath: ''
    };
  },
  created() {
    this.basePath = this.getBasePath();
  },
  methods: {
    iconStyle(iconType) {
      const TYPE_BADEND = 'badend';

      const ICON_BADEND = 'icon_badend.jpg'

      switch(iconType) {
        case TYPE_BADEND:
        case 'be':
          return {
          backgroundImage: `url('${this.getBasePath()}/images/generic/${ICON_BADEND}')`
        };
        default:
          return {
            backgroundImage: `url('${this.getBasePath()}/images/generic/${ICON_BADEND}')`
          };
      }
    },
    getBasePath() {
      var location = window.location.pathname;
      var firstSlashIndex = location.indexOf('/');
      var secondSlashIndex = location.indexOf('/', firstSlashIndex + 1);
      return  location.substring(0, secondSlashIndex);
    }
  }
};
</script>

<style scoped>
.icon {
  /* Add dimensions to span */
  display: inline-block;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  vertical-align: top;
}
</style>
