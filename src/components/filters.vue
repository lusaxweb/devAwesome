<template>
  <div class="con-select-filter">
    <vs-select
      placeholder="Section"
      vs-color="#FF3A4E"
      class="selectx"
      v-model="$store.state.filters.section"
      >
        <vs-select-item :vs-value="null" vs-text="All" />
        <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in $store.state.sections" />
    </vs-select>
    <vs-select
      placeholder="Lenguage or Framework"
      vs-color="#FF3A4E"
      class="selectx"
      v-model="$store.state.filters.lenguaje"
      >
        <vs-select-item :vs-value="null" vs-text="All" />
        <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in $store.state.lenguajes" />
    </vs-select>
    <vs-select
      placeholder="Explore"
      vs-color="#FF3A4E"
      class="selectx"
      v-model="$store.state.filters.explore"
      >
        <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in $store.state.explores" />
    </vs-select>

    <div class="con-display">
      <button>
        <i class="material-icons">
          dashboard
        </i>
      </button>
      <ul>
        <li :class="{'active-display': $store.state.display == 1}" @click="$store.state.display = 1">
          <i class="material-icons">
            view_module
          </i>
        </li>
        <li :class="{'active-display': $store.state.display == 2}" @click="$store.state.display = 2">
          <i class="material-icons">
            view_comfy
          </i>
        </li>
        <li :class="{'active-display': $store.state.display == 3}" @click="$store.state.display = 3">
          <i class="material-icons">
            view_list
          </i>
        </li>
        <li :class="{'active-display': $store.state.display == 4}" @click="$store.state.display = 4">
          <i class="material-icons">
            view_headline
          </i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    section: ''
  })
}
</script>
<style lang="stylus">
@require '../config'
.con-select-filter
  width 100%
  padding 20px 20px
  padding-top 0px
  display flex
  align-items center
  justify-content flex-start
  z-index 500
  .selectx
    max-width 200px
    margin 4px
  .con-display
    margin-left auto
    position relative
    &:hover
      button
        background var(--fondo3)
        border-radius 5px 5px 0px 0px
      ul
        visibility visible !important
        opacity 1 !important
        transform translate(0) scale(1) !important

    button
      padding 8px
      display flex
      align-items center
      position relative
      justify-content center
      background var(--fondo2)
      border-radius 5px
      color var(--text-color)

    ul
      display flex
      align-items center
      justify-content center
      background var(--fondo3)
      border-radius 5px 0px 5px 5px
      position absolute
      right 0px
      visibility hidden
      opacity 0
      transition all .3s ease
      transform translate(0, -10px)
      z-index 500
      li
        padding 5px
        display flex
        align-items center
        justify-content center
        cursor pointer
        transition all .2s ease
        border-radius 5px
        &:hover
          background $morado !important
          color rgb(255,255,255)
        &.active-display
          background $morado
          transform scale(1.1)
          color rgb(255,255,255)
    i
      font-size 1.7rem

@media only screen and (max-width: 600px)
  .con-select-filter
    flex-wrap wrap
    .selectx
      max-width 100%
      width 100%
</style>
