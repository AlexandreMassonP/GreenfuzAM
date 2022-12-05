import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip, {
    defaultHtml: true,
  })

export default function (ctx, inject) {
	inject('VTooltip', VTooltip)
}