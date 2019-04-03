<template>
  <div class="carbon">
    <div key="carbonx" ref="carbonx"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    var elem = document.getElementById('_carbonads_projs')
    if (elem) {
      elem.parentNode.removeChild(elem)
    }
    this.$nextTick(() => {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute(
        'src',
        `//cdn.carbonads.com/carbon.js?serve=CK7DC27J&placement=lusaxwebgithubio`
      )
      script.setAttribute(
        'id',
        `_carbonads_js`
      )
      if (!document.querySelector('#_carbonads_js')) {
        this.$refs.carbonx.appendChild(script)
      }
    })
  }
}
</script>
<style lang="stylus" >
@require '../config'

/* #-carbonads */
.carbon div[id*="carbonads"] {
  --width: 160px;
  --font-size: 13px;
}

.carbon div[id*="carbonads"] {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: block;
  overflow: hidden;
  margin-bottom: 20px;
  max-width: 400px;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0px 5px 20px 0px rgba(0,0,0,.1);
  background: var(--fondo2) !important;
  font-size: var(--font-size);
  line-height: 1.5;
  position: relative;
  z-index: 1000;
  border: 0px;
  margin: 0 auto;
  transition: all .3s ease;
  margin-bottom 20px
}
div[id*="carbonads"]:hover {
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,.05);
}
div[id*="carbonads"] a {
  color: inherit;
  text-decoration: none;
}

div[id*="carbonads"] a:hover {
  color: inherit;
}

// div[id*="carbonads"] span {
//   position: relative;
//   display: block;
//   overflow: hidden;
// }

.carbon-wrap
  position relative
  display flex
  align-items center
  justify-content center

.carbon-img {
  display: block;
  margin-bottom: 8px;
  max-width: var(--width);
  line-height: 1;
  float: left;
  margin-left 5px
  margin-top 5px
}

.carbon-img img {
  display: block;
  margin: 0 auto;
  max-width: var(--width) !important;
  width: var(--width);
  height: auto;
  border-radius 6px
}

.carbon-text {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.carbon-poweredby {
  display: block;
  padding: 10px var(--font-size);
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 600;
  font-size: 9px;
  line-height: 0;
}

@media only screen and (max-width: 600px) {

  div[id*="carbonads"] {
    float: none;
    margin: 0 auto;
    right: 0px;
    max-width: calc(100% - 20px);
    position: relative;
    margin-bottom: 20px
  }
  div[id*="carbonads"] span {
    position: relative;
  }
  div[id*="carbonads"] > span {
    max-width: none;
  }
  .carbon-img {
    float: left;
    margin: 0;
  }

  .carbon-img img {
    max-width: 130px !important;
  }
  .carbon-text {
    float: left;
    margin-bottom: 0;
    padding: 8px 20px;
    text-align: left;
    max-width: calc(100% - 130px - 3em);
  }
  .carbon-poweredby {
    left: 130px;
    bottom: 0;
    display: block;
    width: 100%;
  }
}
</style>
