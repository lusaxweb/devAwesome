<template>
  <div class="con-select-filter">
    <vs-select
      placeholder="Section"
      vs-color="#FF3A4E"
      class="selectx"
      v-model="$store.state.filters.section"
      >
        <vs-select-item :vs-value="null" vs-text="none" />
        <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in $store.state.sections" />
    </vs-select>
    <vs-select
      placeholder="Lenguaje"
      vs-color="#FF3A4E"
      class="selectx"
      v-model="$store.state.filters.lenguaje"
      >
        <vs-select-item :vs-value="null" vs-text="none" />
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
.con-select-filter
  width 100%
  padding 30px 30px
  display flex
  align-items center
  justify-content flex-start
  .selectx
    max-width 200px
    margin 7px
</style>
